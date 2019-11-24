import ajax from './ajax';

/* eslint-disable import/prefer-default-export */
export function requestResumes() {
  return ajax('/resumes');
}
