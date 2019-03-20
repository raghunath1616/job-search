import { fork } from "redux-saga/effects"
import JobSearchSaga from "container/saga"
export default function* main() {
  yield fork(JobSearchSaga)
}
