import ajax from './ajax';

/* eslint-disable import/prefer-default-export */
export function signIn(loginData) {
  return ajax('/sign_in', { method: 'POST', body: loginData });
}
