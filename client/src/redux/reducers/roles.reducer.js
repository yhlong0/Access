const initState = [];

const roleReducer = (roles = initState, action) => {

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

export default roleReducer;