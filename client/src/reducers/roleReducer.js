export default function roleReducer(state = {
    role: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {
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
                fetching: false,
                fetched: true, 
                role: action.payload,
            }
        default: 
            return state;
    }
};