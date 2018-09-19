export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export const setNotification = ({ message, entity }) => ({
    type: `${entity} ${SET_NOTIFICATION}`,
    payload: message,
    meta: {entity}
});

export const removeNotification = (notificationId, entity) => ({
    type: `${entity} ${REMOVE_NOTIFICATION}`,
    payload: notificationId,
    meta: {entity}
});