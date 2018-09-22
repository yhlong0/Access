import { combineReducers } from 'redux';

import rolesReducer from './roles.reducer';
import systemsReducer from './systems.reducer';
import usersReducer from './users.reducer';


export default combineReducers({
  rolesReducer,
  systemsReducer,
  usersReducer
});
