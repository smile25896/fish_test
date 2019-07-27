import axios from 'axios';
import { getDataError, getDataSuccess } from 'actions/data';
import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
} from 'constant';
import { take, call, put, fork, cancel } from 'redux-saga/effects';

function* sendRequest(id) {
  try {
    const response = yield call(axios, {
      method: 'POST',
      url: `/TestNewUI/testinpfcf.php`,
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
      data: {
        API_SVRTYP: "AE_LIST"
      },
    });
    yield put(getDataSuccess(response.data));
  } catch (e) {
    yield put(getDataError(e));
  }
}

function* getData() {
  while (true) {
    const question = yield take(GET_DATA);
    const task = yield fork(sendRequest, question.payload.id);
    yield take([GET_DATA_SUCCESS, GET_DATA_ERROR]);
    yield cancel(task);
  }
}

export default getData;