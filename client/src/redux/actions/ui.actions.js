export const SET_LOADER = 'SET_LOADER';
export const SELECT_ITEM = 'SELECT_ITEM';

export const setLoader = ({ state, entity }) => ({
    type: `${entity} ${SET_LOADER}`,
    payload: state,
    meta: { entity }
});

export const selectItem = (selected, entity) => {
    return {
        type: `${entity} ${SELECT_ITEM}`,
        payload: selected,
    };
};