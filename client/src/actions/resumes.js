import { createAction } from 'redux-actions';

import {
  REQUEST_RESUMES_SUCCESS,
  REQUEST_RESUMES_FAILURE,
  ADD_NEW_RESUME_SUCCESS,
  ADD_NEW_RESUME_FAILURE,
  UPDATE_RESUME_DETAILS_SUCCESS,
  UPDATE_RESUME_DETAILS_FAILURE,
  DELETE_RESUME_SUCCESS,
  DELETE_RESUME_FAILURE
} from '../constants/actionTypes';
import * as Resume from '../api/resumes';

const requestResumesSuccess = createAction(REQUEST_RESUMES_SUCCESS);
const requestResumesFailure = createAction(REQUEST_RESUMES_FAILURE);

export function requestResumes() {
  return dispatch => Resume.requestResumes()
    .then(data => dispatch(requestResumesSuccess(data)))
    .catch(error => dispatch(requestResumesFailure(error)));
}

const addNewResumeSuccess = createAction(ADD_NEW_RESUME_SUCCESS);
const addNewResumeFailure = createAction(ADD_NEW_RESUME_FAILURE);

export function addNewResume(params) {
  return dispatch => Resume.addNewResume(params)
    .then(data => dispatch(addNewResumeSuccess(data)))
    .catch(error => dispatch(addNewResumeFailure(error)));
}

const updateResumeDetailsSuccess = createAction(UPDATE_RESUME_DETAILS_SUCCESS);
const updateResumeDetailsFailure = createAction(UPDATE_RESUME_DETAILS_FAILURE);

export function updateResumeDetails(id, params) {
  return dispatch => Resume.updateResumeDetails(id, params)
    .then(data => dispatch(updateResumeDetailsSuccess(data)))
    .catch(error => dispatch(updateResumeDetailsFailure(error)));
}

const deleteResumeSuccess = createAction(DELETE_RESUME_SUCCESS);
const deleteResumeFailure = createAction(DELETE_RESUME_FAILURE);

export function deleteResume(id) {
  return dispatch => Resume.deleteResume(id)
    .then(data => dispatch(deleteResumeSuccess({ ...data, id })))
    .catch(error => dispatch(deleteResumeFailure(error)));
}
