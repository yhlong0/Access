export default function roleReducer(state = {}, action) {
    switch(action.type) {
        case 'CREATE_ROLE':
            return {
                ...state, 
                name: action.name,
                description: action.description 
            };
        case 'FETCH_ROLE_FULFILLED': 
            return {
                ...state, 
                name: action.name,
                description: action.description 
            }
        default: 
            return state;
    }
};