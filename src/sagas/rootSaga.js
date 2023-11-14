import { all } from "redux-saga/effects";
import watcherUserSaga from "./handlers/fetchUsers";
import watcherAreaChartSaga from './handlers/fetchAreaChartData'

// A root Saga aggregates multiple Sagas to a single entry point for the sagaMiddleware to run.
export default function* rootSaga() {

  // all is used with an array and all sagas will be executed in parallel.
  // yield all([fork(watcherUserSaga), fork(watcherAreaChartSaga)]);

  yield all([watcherAreaChartSaga()]);
}
