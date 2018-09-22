import { SET_SYSTEMS } from '../actions/systems.actions';

const initState = [];

// export const systemsReducer = (systems = initState, action) => {
//     switch (action.type) {
//         case SET_SYSTEMS:
//             return action.payload;
//         default:
//             return systems;
//     }
// }

export default function systemsReducer(systems = initState, action) {
    switch (action.type) {
        case SET_SYSTEMS:
            return action.payload;
        default:
            return systems;
    }
}
