import { applyMiddleware, createStore, combineReducers } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import { systemsReducer } from './reducers/systems.reducer';
import { notificationsReducer } from './reducers/notifications.reducer';

const rootReducer = combineReducers({
    systems: systemsReducer,
    notification: notificationsReducer
});

const middleware = applyMiddleware(thunk, logger, promise());

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);