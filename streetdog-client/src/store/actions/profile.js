import { apiCall } from '../../services/api';
import { LOAD_PROFILE } from '../actionTypes';
import { addError } from './errors';

export const loadProfile = profile => ({
  type: LOAD_PROFILE,
  profile
});

export const fetchProfile = () => {
  return dispatch => {
    return apiCall('get', '/api/users/shop')
      .then(res => {
        dispatch(loadProfile(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      })
  }
}

export const postNewProfile = profile => (dispatch, getState) => {
  const { currentUser } = getState();
  const id = currentUser.id;
  return apiCall('post', `/api/users/${id}/shop`, {profile})
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
}