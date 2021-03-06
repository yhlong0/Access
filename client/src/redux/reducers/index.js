import { combineReducers } from 'redux';

import rolesReducer from './roles.reducer';
import systemsReducer from './systems.reducer';
import usersReducer from './users.reducer';
import dialogReducer from './dialog.reducer';
import uiReducer from './ui.reducer';
import notificationsReducer from './notifications.reducer';
import booksReducer from './books.reducer';


export default combineReducers({
  booksReducer,
  notificationsReducer,
  rolesReducer,
  uiReducer,
  systemsReducer,
  usersReducer,
  dialogReducer
});
