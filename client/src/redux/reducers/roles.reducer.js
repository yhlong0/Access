import { SET_ROLES, SELECT_ROLE } from '../actions/roles.actions';

const initState = [];

export default function rolesReducer (roles = initState, action) {

    switch (action.type) {

        case SET_ROLES:
            return {
                ...roles,
                roles: action.payload
            }

        case SELECT_ROLE:
            return {
                ...roles,
                selected: action.payload,
            }

        default:
            return roles;
    }
}
