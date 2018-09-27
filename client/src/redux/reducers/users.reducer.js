import { SET_USERS } from '../actions/users.actions';

const initState = {
    users: [],
    dialogOpenStatus: false,
    renderList: [],
    accessData: {
        userId: null,
        dialog: '',
        newAccess: [],
        currentAccess: [],
    },
    search: '',
    renderNewUser: true,
    showAllUsers: false,
    error: null,
};

export default function usersReducer(users = initState, action) {

    switch (action.type) {

        case SET_USERS:
            return {
                ...users,
                users: action.payload
            }
        case 'RENDER_FORM':
            return {
                ...users,
                renderNewUser: !users.renderNewUser,
            }
        default:
            return users;
    }
}