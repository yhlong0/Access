import { applyMiddleware, createStore, combineReducers } from 'redux';

import logger from 'redux-logger';

import { systemsReducer } from './reducers/systems.reducer';
import { usersReducer } from './reducers/users.reducer';
import rolesReducer from './reducers/roles.reducer';
import { notificationsReducer } from './reducers/notifications.reducer';
import { uiReducer } from './reducers/ui.reducer';

import { systemsMiddleware } from './middleware/app/systems';

import { apiMiddleware } from './middleware/core/api';
import  api from './middleware/api';
import { notificationMiddleware } from './middleware/core/notifications';
 
const rootReducer = combineReducers({
    roles: rolesReducer,
    systems: systemsReducer,
    users: usersReducer,
    ui: uiReducer,
    notification: notificationsReducer
});

const featureMiddleware = [
    systemsMiddleware
];

const coreMiddleware = [
    api,
    apiMiddleware,
    notificationMiddleware,
];

const middleware = applyMiddleware(...featureMiddleware, ...coreMiddleware, logger);

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);