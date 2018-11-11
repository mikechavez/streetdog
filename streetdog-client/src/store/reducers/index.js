import { combineReducers } from "redux";
import currentUser from './currentUser';
import errors from './errors';
import userProfile from './userProfile';

const rootReducer = combineReducers({
  currentUser,
  errors,
  userProfile
});

export default rootReducer;