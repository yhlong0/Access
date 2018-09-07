export default function userReducer(state = {
    user: [],
    fetching: true,
    dialogOpenStatus: false,
    accessData: {
        userId: null,
        newAccess: [],
        currentAccess: [],
    },
    search: '',
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
        case 'FETCH_ACCESS_DATA':
            return {
                ...state,
                fetching: false,
                accessData: action.payload,
            }
        case 'CLICKED_ACCESS': 
            return {
                ...state,
                accessData: { 
                    ...state.accessData,
                    newAccess: action.payload
                },
            }
        case 'UPDATE_SEARCH': 
            return {
                ...state,
                search: action.payload,
            }
        case 'CLEAR_ACCESSDATA': 
            return {
                ...state,
                accessData: {
                    userId: null,
                    newAccess: [],
                    currentAccess: [],
                },
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
        case 'CLEAR_SEARCH': 
            return {
                ...state,
                search: '',
            }
        default: 
            return state;
    }
};