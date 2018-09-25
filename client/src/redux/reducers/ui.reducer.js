import { SET_LOADER, SELECT_ITEM } from '../actions/ui.actions';

const initState = {
    loading: false,
    selected: []
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
        
        default:
            return ui;
    }
}