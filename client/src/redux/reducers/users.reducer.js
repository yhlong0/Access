import { SET_USERS } from '../actions/users.actions';

export const userReducer = (users = [], action) => {
    const { payload } = action;

    switch (action.type) {
        case SET_USERS:
            return payload.data;
    
        default:
            return users;
    }
}