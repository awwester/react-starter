import axios from 'axios';
import config from 'config';

export const FETCH_ME_START = 'FETCH_ME_START';
const fetchMeStart = () => ({ type: FETCH_ME_START });

export const FETCH_ME_SUCCESS = 'FETCH_ME_SUCCESS';
const fetchMeSuccess = data => ({ type: FETCH_ME_SUCCESS, data });

export const fetchMe = () => dispatch => {
  dispatch(fetchMeStart());
  const url = `${config.apiUrl}users/me/`;

  return axios.get(url)
    .then(success => dispatch(fetchMeSuccess(success.data)));
};
