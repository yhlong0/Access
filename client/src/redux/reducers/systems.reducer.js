import { SET_SYSTEMS } from '../actions/systems.actions';

const initState = [];

export default function systemsReducer(systems = initState, action) {

    switch (action.type) {

        case SET_SYSTEMS:
            return {
                ...systems,
                systems: action.payload
            }

        default:
            return systems;
    }
}
