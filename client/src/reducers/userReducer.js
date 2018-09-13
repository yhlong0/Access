export default function userReducer(state = {
    user: [],
    fetching: true,
    dialogOpenStatus: false,
    renderList: [],
    accessData: {
        userId: null,
        dialog: '',
        newAccess: [],
        currentAccess: [],
    },
    search: '',
    renderNewUser: false,
    showAllUsers: false,
    error: null,
}, action) {
    switch(action.type) {
        case 'FETCH_USERS_FULFILLED': 
            return {
                ...state,
                fetching: false,
                user: action.payload,
            }
        case 'API_CALL_REJECTED':
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
        case 'FETCH_ROLE_DATA':
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
        case 'SET_RENDERLIST': 
            return {
                ...state,
                renderList: action.payload,
            }
        case 'SET_SHOW_ALL_USERS' : 
            return {
                ...state,
                showAllUsers: !state.showAllUsers,
            }
        case 'SET_USERID':
            return {
                ...state,
                accessData: {
                    ...state.accessData,
                    userId: action.payload,
                }
            }
        case 'SET_DIALOG':
            return {
                ...state,
                accessData: {
                    ...state.accessData,
                    dialog: action.payload,
                }
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
        case 'CLEAR_RENDERLIST':
            return {
                ...state,
                renderList: [],
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
        case 'RENDER_FORM': 
            return {
                ...state,
                renderNewUser: !state.renderNewUser,
            }
        case 'CHANGE_STATUS_FULFILLED':
            return {
                ...state,
                fetching: false,
            }
        default: 
            return state;
    }
};