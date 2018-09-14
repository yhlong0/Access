import { SET_NOTIFICATION } from '../actions/notification.actions';

const initState = [];

export const notificationReducer = (notifications = initState, action) => {
    switch (true) {
        case cancelAnimationFrame.type.includes(SET_NOTIFICATION):
            return [...notifications, action.payload];
        default: 
            return notifications;
    }
}