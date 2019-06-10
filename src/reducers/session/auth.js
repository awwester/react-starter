import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from 'actions/auth/login';

const initialState = {
  isLoading: false,
  token: '',
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, isLoading: true, error: '' };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.data.key,
        error: ''
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: 'Could not login with provided credentials.'
      };
    default:
      return state
  }
}
