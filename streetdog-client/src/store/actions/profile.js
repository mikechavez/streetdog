import { apiCall } from '../../services/api';
import { SET_CURRENT_PROFILE } from '../actionTypes';
import { addError } from './errors';

export const setCurrentProfile = profile => ({
  type: SET_CURRENT_PROFILE,
  profile
});

export const fetchProfile = () => {
  return (dispatch, getState) => {
    const { currentUser } = getState();
    const userId = currentUser.user.id;
    return apiCall('get', `/api/users/${userId}/shop`)
      .then(({...profile}) => {
        dispatch(setCurrentProfile(profile));
      })
      .catch(err => {
        dispatch(addError(err.message));
      })
  }
}

export const postNewProfile = profile => (dispatch, getState) => {
  const { currentUser } = getState();
  const id = currentUser.user.id;
  return new Promise((resolve, reject) => {
    return apiCall('post', `/api/users/${id}/shop`, { ...profile })
    .then( ({...profile}) => {
      dispatch(setCurrentProfile(profile));
      resolve();
    })
    .catch(err => {
      dispatch(addError(err.message))
      reject();
    });
  })
    
}


// todo updateProfile
export const updateProfile = profile => (dispatch, getState) => {
  const { currentUser } = getState();
  const id = currentUser.user.id;
  return new Promise((resolve, reject) => {
    return apiCall('put', `/api/users/${id}/shop`, { ...profile })
    .then( ({...profile}) => {
      dispatch(setCurrentProfile(profile));
      resolve();
    })
    .catch(err => {
      dispatch(addError(err.message))
      reject();
    });
  })
}