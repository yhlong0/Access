import { 
    DIALOG_SET_LIST, 
    DIALOG_CLOSE,
    DIALOG_SEARCH 
} from '../actions/dialog.action';

const initState = {
    renderList: [],
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

        default:
            return dialog;
    }
}