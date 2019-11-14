import ajax from './ajax';

/* eslint-disable import/prefer-default-export */
export function requestCurrentUser() {
  return ajax('/current_user');
}
