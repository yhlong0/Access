import { applyMiddleware, createStore } from 'redux';

import reducer from './reducers/index';

import { createLogger } from 'redux-logger';
import { apiMiddleware } from './middleware/core/api';
import { notificationMiddleware } from './middleware/core/notifications';
import { systemsMiddleware } from './middleware/app/systems';
import { booksMiddleware } from './middleware/app/books';
import  api from './middleware/api';

const logger = createLogger({
    pdiff: true,
    duration: true,
});

const featureMiddleware = [
    booksMiddleware,
];

const coreMiddleware = [

];

const middleware = applyMiddleware(
    ...featureMiddleware, 
    ...coreMiddleware, 
    logger
);

export const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    middleware
);