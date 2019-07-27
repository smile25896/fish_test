import {
  GET_DATA,
  GET_DATA_ERROR,
  GET_DATA_SUCCESS,
} from 'constant';

export function getData() {
  return {
    type: GET_DATA,
    payload: {},
  };
}

export function getDataSuccess(data) {
  return {
    type: GET_DATA_SUCCESS,
    payload: {data},
  };
}

export function getDataError(errors) {
  return {
    type: GET_DATA_ERROR,
    payload: {
      errors: errors,
    },
  };
}