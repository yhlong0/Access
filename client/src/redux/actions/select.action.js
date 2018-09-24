export const SELECT_ITEM = 'SELECT_ITEM';

export const selectItem = (selected, entity) => {
    return {
        type: `${entity} ${SELECT_ITEM}`,
        payload: selected,
    };
};