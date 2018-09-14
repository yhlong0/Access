import { SET_SYSTEMS } from '../actions/systems.actions';

export const systemReducer = (systems = [], action) => {
    const { payload } = action;

    switch (action.type) {
        case SET_SYSTEMS:
            return payload.data;
    
        default:
            return systems;
    }
}