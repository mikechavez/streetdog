import { apiCall } from '../../services/api';
import { LOAD_PROFILE } from '../actionTypes';
import { addError } from './errors';

export const loadProfile = profile => ({
  type: LOAD_PROFILE,
  profile
});

export const fetchProfile = () => {
  return (dispatch, getState) => {
    const { userProfile, currentUser } = getState();
    
    // const shopId = userProfile.profile._id;
    const shopId = '5bea402631637f0be8fd5cfe';
    const userId = currentUser.user.id;
    return apiCall('get', `/api/users/${userId}/shop/${shopId}`)
      .then(({...profile}) => {
        // dispatch(loadProfile(profile.hours));
        dispatch(loadProfile(profile));
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
      dispatch(loadProfile(profile));
      resolve();
    })
    .catch(err => {
      dispatch(addError(err.message))
      reject();
    });
  })
    
}