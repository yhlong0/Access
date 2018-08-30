import { combineReducers } from 'redux';

import role from './roleReducer';
import system from './systemReducer';
import user from './userReducer';

export default combineReducers({
    role,
    system,
    user,
});