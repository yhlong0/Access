export const DIALOG = '[Dialog]';

export const DIALOG_OPEN = `${DIALOG} OPEN`;
export const DIALOG_CLOSE = `${DIALOG} CLOSE`;
export const DIALOG_SET_LIST = `${DIALOG} SET_LIST`;
export const DIALOG_SEARCH = `${DIALOG} SEARCH`;
export const DIALOG_CHECKED_ITEM = `${DIALOG} CHECKED_ITEM`;
export const DIALOG_SAVE_USERID = `${DIALOG} SAVE_USERID`;
export const DIALOG_ADD_ITEM = `${DIALOG} ADD_ITEM`;

export const openDialog = (userId, dialog, systems, roles) => ({
    type: DIALOG_OPEN,
    userId: userId,
    dialog: dialog,
    systems: systems,
    roles: roles
});

export const setRenderList = (result) => ({
    type: DIALOG_SET_LIST,
    payload: result
})

export const closeDialog = () => ({
    type: DIALOG_CLOSE
});

export const updateSearch = (search) => ({
    type: DIALOG_SEARCH,
    payload: search
});

export const checkedItem = (itemId) => ({
    type: DIALOG_CHECKED_ITEM,
    payload: itemId
});

export const setUserId = (userId) => ({
    type: DIALOG_SAVE_USERID,
    payload: userId
});

export const addItem = ({itemId, userId }) => ({
    type: DIALOG_ADD_ITEM,
    payload: {itemId, userId}
});