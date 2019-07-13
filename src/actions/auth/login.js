import axios from 'axios';
import config from 'config';

export const LOGIN_START = 'LOGIN_START';
const loginStart = data => ({ type: LOGIN_START });

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const loginSuccess = data => ({ type: LOGIN_SUCCESS, data });

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
const loginFailure = data => ({ type: LOGIN_FAILURE, data });

export default (payload) => {
  return dispatch => {
    dispatch(loginStart(payload));
    const url = `${config.apiUrl}auth/login/`;

    return axios.post(url, payload)
      .then(
        success => {
          axios.defaults.headers.common.Authorization = `Token ${success.data.key}`;
          return dispatch(loginSuccess(success.data));
        },
        error => {
          const data = error.response && error.response.data
            ? error.response.data
            : { error: 'Unable to login with the provided credentials.' };
          return dispatch(loginFailure(data));
        },
      );
  };
}
