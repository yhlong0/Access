export const SET_NOTIFICATION = 'SET_NOTIFICATION';

export const setNotification = (notification, entity) => ({
    type: `${entity} ${SET_NOTIFICATION}`,
    payload: {
        type: `${entity} ${SET_NOTIFICATION}`,
        data: notification,
        meta: entity
    }
});