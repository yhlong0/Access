import { USERS, FETCH_USERS, setUsers } from '../../actions/users.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from "../../actions/api.actions";
import { API } from '../../constants/constants';
import { setNotification } from '../../actions/notification.actions';

export const usersMiddleware = ({dispatch}) => next => action => {
    next(action);

    switch (action.type) {
        case FETCH_USERS:
            dispatch(apiRequest({body: null, method: 'GET', url: API.USERS, entity: USERS}));
            break;
        case `${USERS} ${API_SUCCESS}`:
            dispatch(setUsers({ users: action.payload }));
            break;
        case `${USERS} ${API_ERROR}`:
            dispatch(setNotification({
                message: action.payload.message,
                entity: USERS
            }));
    }
};