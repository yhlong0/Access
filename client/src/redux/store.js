import { applyMiddleware, createStore } from 'redux';

import reducer from './reducers/index';

import { createLogger } from 'redux-logger';
import { apiMiddleware } from './middleware/core/api';
import { notificationMiddleware } from './middleware/core/notifications';
import { systemsMiddleware } from './middleware/app/systems';
import { rolesMiddleware } from './middleware/app/roles';
import { booksMiddleware } from './middleware/app/books';


const logger = createLogger({
    pdiff: true,
    duration: true,
});

const featureMiddleware = [
    booksMiddleware,
    rolesMiddleware
];

const coreMiddleware = [
    apiMiddleware,
    notificationMiddleware
];

const middleware = applyMiddleware(
    ...featureMiddleware, 
    ...coreMiddleware, 
    logger
);

export const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__(), 
    middleware
);