import { API } from '../../constants/constants';
import { API_SUCCESS, API_ERROR, apiRequest } from "../../actions/api.actions";
import { setNotification } from '../../actions/notification.actions';
import { 
    setLoader, 
    switchModalView,
    SWITCH_FULL_USER_VIEW 
} from '../../actions/ui.actions';
import { 
    USERS, 
    FETCH_USERS, 
    CREATE_USER,
    DELETE_USER,
    CHANGE_STATUS,
    REMOVE_ROLE,
    REMOVE_ACCESS,
    OPEN_DIALOG,
    setUsers 
} from '../../actions/users.actions';

export const usersMiddleware = () => next => action => {
    next(action);

    switch (action.type) {

        case FETCH_USERS:
            next(setLoader({
                state: true,
                entity: USERS
            }));
            next(apiRequest({
                body: action.payload, 
                method: 'GET', 
                url: API.USERS, 
                entity: USERS,
                showAll: action.showAllUsers
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

        case DELETE_USER:
            next(setLoader({
                state: true,
                entity: USERS
            }));
            next(apiRequest({
                body: null,
                method: 'DELETE',
                url: `${API.USERS}/${action.payload}`,
                entity: USERS
            }));
            break;
        
        case CHANGE_STATUS: 
            next(setLoader({
                state: true,
                entity: USERS
            }));  
            console.log(action)
            next(apiRequest({
                body: {status:!action.status},
                method: 'PUT',
                url: `${API.USERS}/${action.payload}`,
                entity: USERS,
                showAll: action.showAll
            }));
            break; 
        
        case SWITCH_FULL_USER_VIEW:
            next(setLoader({
                state: true,
                entity: USERS
            }));
            next(apiRequest({
                body: null,
                method: 'GET',
                url: API.USERS,
                entity: USERS,
                showAll: action.payload
            }));
            break;

        case REMOVE_ROLE:
            next(setLoader({
                state: true,
                entity: USERS
            }));
            next(apiRequest({
                body: null,
                method: 'DELETE',
                url: `${API.USERS}/${action.userId}/role/${action.roleId}`,
                entity: USERS
            }));
            break; 

        case REMOVE_ACCESS:
            next(setLoader({
                state: true,
                entity: USERS
            }));
            next(apiRequest({
                body: null,
                method: 'DELETE',
                url: `${API.USERS}/${action.userId}/access/${action.systemId}`,
                entity: USERS
            }));
            break; 

        case OPEN_DIALOG:
            next(switchModalView(USERS));
            next(apiRequest({
                body: null,
                method: 'GET',
                url: `${API.USERS}/${action.userId}`,
                entity: USERS
            }));
            break; 

        case `${USERS} ${API_SUCCESS}`:     
            const { method, body, showAll } = action.meta;
            if (method === 'GET') {
                let users = [];     
                showAll ? users = action.payload :
                          users = action.payload
                            .filter(user => user.status === true)
                console.log(showAll);     
                next(setUsers(users));
                next(setLoader({
                    state: false,
                    entity: USERS
                }));
            } else {
                next(apiRequest({
                    body: null,
                    method: 'GET',
                    url: API.USERS,
                    entity: USERS
                }));
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
            break;
    }
};