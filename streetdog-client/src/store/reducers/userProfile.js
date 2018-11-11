import { LOAD_PROFILE } from '../actionTypes';

const DEFAULT_STATE = {
  userProfile: {}
}

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case LOAD_PROFILE:
      return {
        profile: [...action.profile]
      };
    default:
      return state;
  }
}