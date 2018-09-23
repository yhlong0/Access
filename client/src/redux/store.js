import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';

import reducer from './reducers/index'

import { systemsMiddleware } from './middleware/app/systems';
import { apiMiddleware } from './middleware/core/api';
import  api from './middleware/api';
import { notificationMiddleware } from './middleware/core/notifications';

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