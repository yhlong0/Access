import { DIALOG_SET_LIST, DIALOG_CLOSE } from '../actions/dialog.action';

const initState = {
    renderList: []
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
        
        default:
            return dialog;
    }
}