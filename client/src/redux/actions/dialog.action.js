export const DIALOG = '[Dialog]';

export const DIALOG_OPEN = `${DIALOG} OPEN`;
export const DIALOG_CLOSE = `${DIALOG} CLOSE`;

export const openDialog = (userId, dialog, systems, roles) => ({
    type: DIALOG_OPEN,
    userId: userId,
    dialog: dialog,
    systems: systems,
    roles: roles
});

export const closeDialog = () => ({
    type: DIALOG_CLOSE
});
