import { put, takeEvery } from "redux-saga/effects";
import jsonData from '../../apex/areachart_curryear.json'
import { LOAD_AREACHART_DATA, GET_AREACHART_DATA, FAILED_AREACHART_DATA } from '../../actions/types';


function* handleGetAreaChartData() {
  try {
    const chart_data = jsonData;  //fetch data from the file given 
    console.log(jsonData)
    yield put({ type: GET_AREACHART_DATA, chart_data: chart_data }); // dispatch the action to the store containing  the data
  } catch (err) {
    yield put({ type: FAILED_AREACHART_DATA, message: err.message });
  }
}

// a saga fn whose job is to watch for dispatched actions:
function* watcherAreaChartSaga() {
  yield takeEvery(LOAD_AREACHART_DATA, handleGetAreaChartData);
}

export default watcherAreaChartSaga;
