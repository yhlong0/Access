import { SELECT_ITEM } from '../actions/select.action';

const initState = [];

export default function selectReducer(selected = initState, action) {

    switch (action.type) {

        case SELECT_ITEM:
            return {
                ...selected,
                selected: action.payload
            }

        default:
            return selected;
    }
}