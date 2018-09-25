import { apiRequest, API_SUCCESS, API_ERROR } from '../../actions/api.actions';
import { setNotification } from '../../actions/notification.actions';
import { setLoader } from '../../actions/ui.actions';
import { API } from '../../constants/constants';
import { 
    ROLES, 
    FETCH_ROLES, 
    CREATE_ROLE, 
    DELETE_ROLE,
    setRoles 
} from '../../actions/roles.actions';



export const rolesMiddleware = () => next => action => {
    if(action.type.includes(ROLES)) {
        next(action);
    }
    
    switch (action.type) {

        case FETCH_ROLES:
            next(setLoader({
                state: true,
                entity: ROLES
            }));
            next(apiRequest({
                body: null,
                method: 'GET',
                url: API.ROLES,
                entity: ROLES
            }));
            break;

        case CREATE_ROLE:
            next(setLoader({
                state: true,
                entity: ROLES
            }));
            next(apiRequest({
                body: action.payload,
                method: 'POST',
                url: API.ROLES,
                entity: ROLES
            }));
            break;

        case DELETE_ROLE:
            next(setLoader({
                state: true,
                entity: ROLES
            }));
            action.payload.map(select => {
                next(apiRequest({
                    body: action.payload,
                    method: 'DELETE',
                    url: `${API.ROLES}/${select}`,
                    entity: ROLES
                }));
            })
            break;

        case `${ROLES} ${API_SUCCESS}`:
            const { method, entity } = action.meta;
            if (method === 'GET') {
                next(setRoles(action.payload));
                next(setLoader({
                    state: false,
                    entity: ROLES
                }));
            } else {
                next(apiRequest({
                    body: null,
                    method: 'GET',
                    url: API.ROLES,
                    entity: ROLES
                }));
                next(setLoader({
                    state: false,
                    entity: ROLES
                }));
            }

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