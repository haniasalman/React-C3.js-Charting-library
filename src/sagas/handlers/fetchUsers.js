import { put, takeEvery } from "redux-saga/effects";
import jsonData from '../../data.json'
import { LOAD_DATA, GET_DATA, FAILED_DATA } from '../../actions/types';

function* handleGetUsers() {
  try {
    const users = jsonData;  //fetch data from the file given 
    // console.log(jsonData)
    yield put({ type: GET_DATA, users: users }); // dispatch the action to the store containing  the data
  } catch (err) {
    yield put({ type: FAILED_DATA, message: err.message });
  }
}

// a saga fn whose job is to watch for dispatched actions:
function* watcherUserSaga() {
  yield takeEvery(LOAD_DATA, handleGetUsers);
}

export default watcherUserSaga;
