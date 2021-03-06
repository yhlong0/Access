import { REMOVE_NOTIFICATION, SET_NOTIFICATION } from '../actions/notification.actions';

const initState = [];

export default function notificationsReducer (notifications = initState, action) {
    switch (true) {
        case action.type.includes(SET_NOTIFICATION):
            return [...notifications, action.payload];
        case action.type.includes(REMOVE_NOTIFICATION):
            return notifications.filter(notification => notification.id !== action.payload);
        default: 
            return notifications;
    }
}