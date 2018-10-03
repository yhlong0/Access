import { DIALOG_SET_LIST } from '../actions/dialog.action';

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
            
        default:
            return dialog;
    }
}