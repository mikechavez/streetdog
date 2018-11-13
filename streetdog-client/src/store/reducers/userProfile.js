import { LOAD_PROFILE } from '../actionTypes';

// const DEFAULT_STATE = {
//   userProfile: {}
// }

export default (state = {}, action) => {
  switch(action.type) {
    case LOAD_PROFILE:
      return {
        shop: action.profile
      };
    default:
      return state;
  }
}