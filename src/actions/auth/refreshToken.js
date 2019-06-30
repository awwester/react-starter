import axios from 'axios';
import config from 'config';

export const REFRESH_TOKEN_START = 'REFRESH_TOKEN_START';
const refreshTokenStart = () => ({ type: REFRESH_TOKEN_START });

export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
const refreshTokenSuccess = data => ({ type: REFRESH_TOKEN_SUCCESS, data });

export const REFRESH_TOKEN_FAILURE = 'REFRESH_TOKEN_FAILURE';
const refreshTokenFailure = () => ({ type: REFRESH_TOKEN_FAILURE });

export const refreshToken = token => {
  console.log('calling refreshToken action creator', token)
  return dispatch => {
    dispatch(refreshTokenStart());
    const url = `${config.apiUrl}auth/jwt/refresh/`;

    return axios.post(url, { token })
      .then(
        success => {
          console.log('setting new header...', success.data.token)
          axios.defaults.headers.common.Authorization = `JWT ${success.data.token}`;
          return dispatch(refreshTokenSuccess(success.data));
        },
        error => {
          return dispatch(refreshTokenFailure());
        },
      );
  };
}
