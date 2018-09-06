export default function userReducer(state = {
    user: [],
    fetching: true,
    dialogOpenStatus: false,
    accessData: {},
    error: null,
}, action) {
    switch(action.type) {
        case 'CREATE_USER_REJECTED':
            return {
                ...state,
                fetching: false,
                error: action.payload,
            };
        case 'FETCH_USERS_FULFILLED': 
            return {
                ...state,
                fetching: false,
                user: action.payload,
            }
        case 'FETCH_USERS_REJECTED':
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        case 'DELETE_USERS_REJECTED':
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        case 'ADD_ACCESS_REJECTED':
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        case 'SET_USERID': 
            return {
                ...state,
                accessData: action.payload,
            }
        case 'CLEAR_ACCESSDATA': 
            return {
                ...state,
                accessData: {},
            }        
        case 'FETCHING':
            return {
                ...state,
                fetching: true,
            }
        case 'SWITCH':
            return {
                ...state,
                dialogOpenStatus: !state.dialogOpenStatus, 
            }
        default: 
            return state;
    }
};