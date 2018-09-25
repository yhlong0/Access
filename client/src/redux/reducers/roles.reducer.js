import { SET_ROLES } from '../actions/roles.actions';

const initState = [];

export default function rolesReducer (roles = initState, action) {

    switch (action.type) {

        case SET_ROLES:
            return {
                ...roles,
                roles: action.payload
            }

        default:
            return roles;
    }
}
