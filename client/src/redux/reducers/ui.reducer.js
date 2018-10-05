import { 
    SET_LOADER, 
    SELECT_ITEM,
    SWITCH_NEW_USER_VIEW,
    SWITCH_MODAL_VIEW,
    SWITCH_FULL_USER_VIEW
} from '../actions/ui.actions';

const initState = {
    loading: false,
    selected: [],
    newUserView: false,
    modalView: false,
    showAllUsers: false
};

export default function uiReducer (ui = initState, action) {
    
    switch (true) {
        
        case action.type.includes(SET_LOADER):
            return {
                ...ui,
                loading: action.payload
            } 
            
        case action.type.includes(SELECT_ITEM):
            return {
                ...ui,
                selected: action.payload
            }

        case action.type.includes(SWITCH_NEW_USER_VIEW):
            return {
                ...ui,
                newUserView: !ui.newUserView
            }

        case action.type.includes(SWITCH_MODAL_VIEW):
            return {
                ...ui,
                modalView: !ui.modalView
            }

        case action.type.includes(SWITCH_FULL_USER_VIEW):
            return {
                ...ui,
                showAllUsers: !ui.showAllUsers
            }
        
        default:
            return ui;
    }
}