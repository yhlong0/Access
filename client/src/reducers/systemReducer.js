export default function systemReducer(state = {
    system: [],
    selected: [],
    fetching: true,
    error: null,
}, action) {
    switch(action.type) {
        case 'CREATE_SYSTEM_REJECTED': 
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }    
        case 'FETCH_SYSTEMS_FULFILLED': 
            return {
                ...state,
                fetching: false,
                role: action.payload,
            }
        case 'FETCH_SYSTEMS_REJECTED': 
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        case 'DELETE_SYSTEM_REJECTED': 
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        case 'SELECT_SYSTEM': 
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