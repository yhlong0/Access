export const DIALOG = '[Dialog]';

export const DIALOG_OPEN = `${DIALOG} OPEN`;
export const DIALOG_CLOSE = `${DIALOG} CLOSE`;

export const openDialog = () => ({
    type: DIALOG_OPEN
});

export const closeDialog = () => ({
    type: DIALOG_CLOSE
});
