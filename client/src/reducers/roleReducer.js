export default function roleReducer(state = {
    role: [],
    selected: [],
    fetching: true,
    error: null,
}, action) {
    switch(action.type) {
        case 'CREATE_ROLE_REJECTED': 
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }    
        case 'FETCH_ROLES_FULFILLED': 
            return {
                ...state,
                fetching: false,
                role: action.payload,
            }
        case 'FETCH_ROLES_REJECTED': 
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        case 'DELETE_ROLE_REJECTED': 
            return {
                ...state,
                fetching: false,
                error: action.payload,
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
        case 'FETCHING': 
            return {
                ...state,
                fetching: true,
            }
        default: 
            return state;
    }
};