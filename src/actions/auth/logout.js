import axios from 'axios';

export const LOGOUT = 'LOGOUT';
const logout = data => ({ type: LOGOUT });

export const logoutUser = () => (dispatch) => {
  delete axios.defaults.headers.common.Authorization;
  return dispatch(logout());
};
