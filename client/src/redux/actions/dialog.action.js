export const DIALOG = '[Dialog]';

export const DIALOG_OPEN = `${DIALOG} OPEN`;
export const DIALOG_CLOSE = `${DIALOG} CLOSE`;
export const DIALOG_SET_LIST = `${DIALOG} SET LIST`

export const openDialog = (userId, dialog, systems, roles) => ({
    type: DIALOG_OPEN,
    userId: userId,
    dialog: dialog,
    systems: systems,
    roles: roles
});

export const setRenderList = (result) => ({
    type: DIALOG_SET_LIST,
    paylod: result
})

export const closeDialog = () => ({
    type: DIALOG_CLOSE
});