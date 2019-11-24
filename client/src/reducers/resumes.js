import {
  REQUEST_RESUMES_SUCCESS,
  REQUEST_RESUMES_FAILURE
} from '../constants/actionTypes';

const INITIAL_STATE = { data: [], error: null };

export default function resumes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_RESUMES_SUCCESS:
      return { data: action.payload.data };
    case REQUEST_RESUMES_FAILURE:
      return { ...state, error: action.payload.response.error };
    default:
      return state;
  }
}
