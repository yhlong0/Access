export default function roleReducer(state = {
    role: [],
    selected: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    switch(action.type) {
        case 'CREATE_ROLE_FULFILLED':
            return {
                ...state, 
                fetching: false,
                fetched: true, 
                role: action.payload,
            };
        case 'FETCH_ROLES_PENDING': 
            return {
                ...state,
                fetching: true,
                fetched: false, 
                role: [{_id: 'pending', name: 'pending', description: 'pending'}],
            }
        case 'FETCH_ROLES_FULFILLED': 
            return {
                ...state,
                fetching: false,
                fetched: true, 
                role: action.payload,
            }
        case 'DELETE_ROLE_PENDING':
            return {
                ...state,
                fetching: true,
                fetched: false, 
                role: [{_id: 'pending', name: 'pending', description: 'pending'}],
            }
        case 'SELECT_ROLE': 
            return {
                ...state,
                selected: action.payload,
            }
        case 'CLEAR_SELECTED': 
            return {
                ...state,
                selected: action.payload,
            }
        default: 
            return state;
    }
};