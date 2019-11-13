import {
  INITIAL_USER_LOAD_SUCCESS,
  INITIAL_USER_LOAD_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER
} from '../constants/actionTypes';

const INITIAL_STATE = { status: null, error: null };

export default function initial(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INITIAL_USER_LOAD_SUCCESS:
    case LOGIN_USER_SUCCESS:
      return {
        ...action.payload,
        status: 'authenticated'
      };
    case INITIAL_USER_LOAD_FAILURE:
    case LOGIN_USER_FAILURE:
      return { ...state, status: null, error: action.payload.response.error };
    case LOGOUT_USER:
      return { status: 'logged_out', error: null };
    default:
      return state;
  }
}
