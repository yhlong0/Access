export default function userReducer(state = {
    user:[],
    fetching: true,
    dialogOpenStatus: false,
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