import { createAction } from 'redux-actions';

import {
  INITIAL_USER_LOAD_SUCCESS,
  INITIAL_USER_LOAD_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  REMOVE_CURRENT_USER
} from '../constants/actionTypes';
import { removeToken } from '../helpers/localStorageCache';
import * as Auth from '../api/authentication';
import * as User from '../api/users';

const initialUserLoadSuccess = createAction(INITIAL_USER_LOAD_SUCCESS);
const initialuserLoadFailure = createAction(INITIAL_USER_LOAD_FAILURE);

export function loadInitial() {
  return dispatch => User.requestCurrentUser()
    .then(data => dispatch(initialUserLoadSuccess(data)))
    .catch(error => dispatch(initialuserLoadFailure(error)));
}

const loginUserSuccess = createAction(LOGIN_USER_SUCCESS);
const loginFailure = createAction(LOGIN_USER_FAILURE);

export function requestLogin(loginData) {
  return dispatch => Auth.signIn(loginData)
    .then(data => dispatch(loginUserSuccess(data)))
    .catch(error => dispatch(loginFailure(error)));
}

const logoutUser = createAction(LOGOUT_USER);
const removecurrentUser = createAction(REMOVE_CURRENT_USER);

export function logout() {
  return (dispatch) => {
    removeToken('token');
    dispatch(removecurrentUser());
    return dispatch(logoutUser());
  };
}
