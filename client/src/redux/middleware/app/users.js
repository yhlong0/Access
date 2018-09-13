import { apiRequest } from "../../actions/api.actions";

export const usersMiddleware = ({dispatch}) => next => action => {
    next(action);

    switch (action.type) {
        case FETCH_USERS:
            dispatch(apiRequest(null, 'GET', API.USERS, USERS));
            dispatch(setLoader(true));
            break;
        case FETCH_USERS:
            dispatch(apiRequest(null, 'GET', API.USERS, USERS));
            dispatch(setLoader(true));
            break;
    }
};