import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from 'actions/auth/login';
import { LOGOUT } from 'actions/auth/logout';
import {
  REFRESH_TOKEN_START, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILURE
} from 'actions/auth/refreshToken';

const initialState = {
  isLoading: false,
  token: '',
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
    case REFRESH_TOKEN_START:
      return { ...state, isLoading: true, error: '' };
    case LOGIN_SUCCESS:
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.data.token,
        error: ''
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: 'Could not login with provided credentials.'
      };
    case REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: 'Could not refresh provided token.'
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
