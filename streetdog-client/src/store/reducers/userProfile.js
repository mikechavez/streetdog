import { SET_CURRENT_PROFILE } from '../actionTypes';

// const DEFAULT_STATE = {
//   userProfile: {}
// }

export default (state = {}, action) => {
  switch(action.type) {
    case SET_CURRENT_PROFILE:
      return {
        shop: action.profile
      };
    default:
      return state;
  }
}