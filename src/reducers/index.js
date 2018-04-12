import { combineReducers } from 'redux';
import usersReducer from './reducer-users';
import authenticationReducer from './reducer-authentication';

const rootReducer = combineReducers({
  users: usersReducer,
  authenticated: authenticationReducer
});

export default rootReducer;
