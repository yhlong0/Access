export default function roleReducer(state = {
    role: [],
    selected: [],
    fetching: true,
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
        case 'FETCH_ROLES_FULFILLED': 
            return {
                ...state,
                fetching: false,
                fetched: true, 
                role: action.payload,
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