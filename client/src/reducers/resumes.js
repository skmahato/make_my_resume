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

const INITIAL_STATE = { data: [], error: null };

export default function resumes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_RESUMES_SUCCESS:
      return { data: action.payload };
    case REQUEST_RESUMES_FAILURE:
      return { ...state, error: action.payload.response.errors };
    case ADD_NEW_RESUME_SUCCESS:
      return { data: [action.payload].concat(state.data) };
    case ADD_NEW_RESUME_FAILURE:
      return { ...state, error: action.payload.response.errors };
    case UPDATE_RESUME_DETAILS_SUCCESS:
      return { data: state.data.map(staff => ((staff.id === action.payload.id) ? { ...action.payload } : staff)) };
    case UPDATE_RESUME_DETAILS_FAILURE:
      return { ...state, error: action.payload.response.errors };
    case DELETE_RESUME_SUCCESS:
      return { data: state.data.filter(staff => staff.id !== action.payload.id) };
    case DELETE_RESUME_FAILURE:
      return { ...state, error: action.payload.response.errors };
    default:
      return state;
  }
}
