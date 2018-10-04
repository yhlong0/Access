import { 
    DIALOG_SET_LIST, 
    DIALOG_CLOSE,
    DIALOG_SEARCH,
    DIALOG_CHECKED_ITEM, 
    DIALOG_SAVE_USERID
} from '../actions/dialog.action';

const initState = {
    renderList: [],
    checkedItem: [],
    search: '',
    userId: ''
}

export default function dialogReducer(dialog = initState, action) {

    switch (action.type) {
        
        case DIALOG_SET_LIST:
            return {
                ...dialog,
                renderList: action.payload
            }

        case DIALOG_CLOSE: 
            return {
                ...dialog,
                renderList: [],
                checkedItem: [],
                search: '',
                userId: ''
            }

        case DIALOG_SEARCH:
            return {
                ...dialog,
                search: action.payload
            }

        case DIALOG_CHECKED_ITEM: 
            return {
                ...dialog,
                checkedItem: action.payload
            }
        
        case DIALOG_SAVE_USERID:
            return {
                ...dialog,
                userId: action.payload
            }

        default:
            return dialog;
    }
}