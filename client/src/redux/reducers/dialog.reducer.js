import { 
    DIALOG_SET_LIST, 
    DIALOG_CLOSE,
    DIALOG_SEARCH,
    DIALOG_CHECKED_ITEM 
} from '../actions/dialog.action';

const initState = {
    renderList: [],
    checkedItem: [],
    search: ''
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
                renderList: []
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

        default:
            return dialog;
    }
}