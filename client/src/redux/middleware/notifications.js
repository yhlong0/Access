import { removeNotification, SET_NOTIFICATION, setNotification } from '../actions/notification.actions';

export const notificationMiddleware = () => (next) => (action) => {
    if (action.type.includes(SET_NOTIFICATION)) {
        const { payload, meta } = action;
        const id = new Date().getMilliseconds();

        const notification = {
            id, 
            message: payload
        };

        next(setNotification({ message: notification, entity: meta.entity }));

        setTimeout(() => {
            next(removeNotification({ notificationId: id, entity: meta.entity }))
        }, 1000);
    } else {
        next(action);
    }
}