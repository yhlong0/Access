import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';

import reducer from './reducers/index'

import { apiMiddleware } from './middleware/core/api';
import { notificationMiddleware } from './middleware/core/notifications';
import { systemsMiddleware } from './middleware/app/systems';
import  api from './middleware/api';

const featureMiddleware = [
    systemsMiddleware
];

const coreMiddleware = [
    api,
    apiMiddleware,
    notificationMiddleware,
];

const middleware = applyMiddleware(...featureMiddleware, ...coreMiddleware, logger);

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);