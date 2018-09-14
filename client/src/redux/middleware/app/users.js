import { USERS, FETCH_USERS, setUsers } from '../../actions/users.actions';
import { API_SUCCESS, apiRequest } from "../../actions/api.actions";
import { setLoader } from '../../actions/ui.actions';
import { API } from '../../constants/constants';

export const usersMiddleware = ({dispatch}) => next => action => {
    next(action);

    switch (action.type) {
        case FETCH_USERS:
            dispatch(apiRequest(null, 'GET', API.USERS, USERS));
            dispatch(setLoader(true));
            break;
        case `${USERS} ${API_SUCCESS}`:
            dispatch(setUsers(action.payload));
            dispatch(setLoader(false));
            break;
    }
};