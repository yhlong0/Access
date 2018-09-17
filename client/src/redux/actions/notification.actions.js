export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export const setNotification = (notification, entity) => ({
    type: `${entity} ${SET_NOTIFICATION}`,
    payload: {
        type: `${entity} ${SET_NOTIFICATION}`,
        data: notification,
        meta: entity
    }
});

export const removeNotification = (notificationId, entity) => ({
    type: `${entity} ${REMOVE_NOTIFICATION}`,
    payload: notificationId,
    meta: {entity}
});