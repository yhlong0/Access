import { SELECT_ITEM } from '../actions/select.action';

const initState = [];

export default function selectReducer(selected = initState, action) {

    if (action.type.includes(SELECT_ITEM)) {
        return {
            ...selected,
            selected: action.payload
        }
    } else {
        return selected;
    }
}