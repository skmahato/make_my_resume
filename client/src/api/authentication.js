import ajax from './ajax';

/* eslint-disable import/prefer-default-export */
export function signIn(body) {
  return ajax('/sign_in', { method: 'POST', body });
}

export function signUp(body) {
  return ajax('/sign_up', { method: 'POST', body });
}
