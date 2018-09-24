import { apiRequest, API_SUCCESS, API_ERROR } from '../../actions/api.actions';
import { ROLES, FETCH_ROLES, setRoles } from '../../actions/roles.actions';
import { setNotification } from '../../actions/notification.actions';
import { setLoader } from '../../actions/ui.actions';

import { API } from '../../constants/constants';

export const rolesMiddleware = () => next => action => {
    next(action);
    switch (action.type) {
        case FETCH_ROLES:
            next(apiRequest({
                body: null,
                method: 'GET',
                url: API.ROLES,
                entity: ROLES
            }));
            next(setLoader({
                state: true,
                entity: ROLES
            }));
            break;
        case `${ROLES} ${API_SUCCESS}`:
            next(setRoles(action.payload));
            next(setLoader({
                state: false,
                entity: ROLES
            }));
            break;
        case `${ROLES} ${API_ERROR}`:
            next(setNotification({
                message: action.payload.message,
                entity: ROLES
            }));
            next(setLoader({
                state: false,
                entity: ROLES
            }));
            break;
        default:
            next(action);
    }
}