import { createAction } from 'redux-actions';

import {
  REQUEST_RESUMES_SUCCESS,
  REQUEST_RESUMES_FAILURE
} from '../constants/actionTypes';
import * as Resume from '../api/resumes';

const requestResumesSuccess = createAction(REQUEST_RESUMES_SUCCESS);
const requestResumesFailure = createAction(REQUEST_RESUMES_FAILURE);

/* eslint-disable import/prefer-default-export */

export function requestResumes() {
  return dispatch => Resume.requestResumes()
    .then(data => dispatch(requestResumesSuccess(data)))
    .catch(error => dispatch(requestResumesFailure(error)));
}
