import { SET_USERS } from '../actions/users.actions';

const initState = [];

export const usersReducer = (users = initState, action) => {
    const { payload } = action;

    switch (action.type) {
        case SET_USERS:
            return payload.data;
        default:
            return users;
    }
}