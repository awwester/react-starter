import axios from 'axios';
import config from 'config';

export const REGISTER_START = 'REGISTER_START';
const registerStart = () => ({ type: REGISTER_START });

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const registerSuccess = data => ({ type: REGISTER_SUCCESS, data });

export const REGISTER_FAILURE = 'REGISTER_FAILURE';
const registerFailure = data => ({ type: REGISTER_FAILURE, data });

export default (payload) => {
  return (dispatch) => {
    dispatch(registerStart());
    const url = `${config.apiUrl}auth/registration/`;

    return axios.post(url, payload)
      .then(
        success => {
          axios.defaults.headers.common.Authorization = `Token ${success.data.key}`;
          return dispatch(registerSuccess(success.data));
        },
        error => dispatch(registerFailure(error.response.data)),
      );
  };
}
