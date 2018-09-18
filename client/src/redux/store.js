import { applyMiddleware, createStore, combineReducers } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import { systemsReducer } from './reducers/systems.reducer';
import { notificationsReducer } from './reducers/notifications.reducer';

import { systemsMiddleware } from './middleware/app/systems';

import { apiMiddleware } from './middleware/core/api';
import { notificationMiddleware } from './middleware/core/notifications';
 
const rootReducer = combineReducers({
    systems: systemsReducer,
    notification: notificationsReducer
});

const featureMiddleware = [
    systemsMiddleware
];

const coreMiddleware = [
    apiMiddleware,
    notificationMiddleware,
];

const middleware = applyMiddleware(thunk, logger, promise(), ...coreMiddleware, ...featureMiddleware);

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);