import ajax from './ajax';

export function requestCurrentUser() {
  return ajax('/current_user');
}
