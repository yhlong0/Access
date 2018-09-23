const initState = [];

export default function roleReducer (roles = initState, action) {

    switch (action.type) {
        case 'SET_ROLES':
            return action.payload;
            
        case 'SELECT_ROLE': 
            return {
                ...roles,
                selected: action.payload,
            }
        default:
            return roles;
    }
}
