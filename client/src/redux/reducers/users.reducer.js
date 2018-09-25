import { SET_USERS } from '../actions/users.actions';

const initState = [];

export default function usersReducer(users = initState, action) {

    switch (action.type) {

        case SET_USERS:
            return {
                ...users,
                users: action.payload
            }
        default:
            return users;
    }
}