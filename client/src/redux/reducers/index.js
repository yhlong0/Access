import { combineReducers } from 'redux';

import rolesReducer from './roles.reducer';
import systemsReducer from './systems.reducer';
import usersReducer from './users.reducer';
import uiReducer from './ui.reducer';
import notificationsReducer from './notifications.reducer';


export default combineReducers({
  rolesReducer,
  systemsReducer,
  usersReducer,
  uiReducer,
  notificationsReducer
});
