import { API } from '../../constants/constants';
import { API_SUCCESS, API_ERROR, apiRequest } from "../../actions/api.actions";
import { setNotification } from '../../actions/notification.actions';
import { setLoader } from '../../actions/ui.actions';
import { 
    USERS, 
    FETCH_USERS, 
    CREATE_USER,
    DELETE_USER,
    setUsers 
} from '../../actions/users.actions';

export const usersMiddleware = () => next => action => {
    //if (action.type.includes(USERS)) {
        next(action);
    //}

    switch (action.type) {

        case FETCH_USERS:
            next(setLoader({
                state: true,
                entity: USERS
            }));
            next(apiRequest({
                body: null, 
                method: 'GET', 
                url: API.USERS, 
                entity: USERS
            }));
            break;

        case CREATE_USER:
            next(setLoader({
                state: true,
                entity: USERS
            }));
            next(apiRequest({
                body: action.payload,
                method: 'POST',
                url: API.USERS,
                entity: USERS
            }));
            break;

        case `${USERS} ${API_SUCCESS}`:
            const { method } = action.meta;
            if (method === 'GET') {
                next(setUsers(action.payload));
                next(setLoader({
                    state: false,
                    entity: USERS
                }));
            } else {
                next(setLoader({
                    state: false,
                    entity: USERS
                }));
            }
            break;

        case `${USERS} ${API_ERROR}`:
            next(setNotification({
                message: action.payload.message,
                entity: USERS
            }));
    }
};