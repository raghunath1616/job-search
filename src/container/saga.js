import { takeLatest, call, put } from "redux-saga/effects"
import { pluck, unique } from "services/Utils"
import * as JobSearchActions from "./actions"
import { getJobPostsAPI } from "./api"

function* getJobPosts() {
  try {
    const res = yield call(getJobPostsAPI)
    if (res) {
      const { jobsfeed } = res.data
      yield put(JobSearchActions.getJobPostsAction.success(jobsfeed))
      const location = pluck(jobsfeed, "location")
      const experience = pluck(jobsfeed, "experience")
      yield put(JobSearchActions.filterLocationAction(unique(location)))
      yield put(JobSearchActions.filterExperienceAction(unique(experience)))
    }
  } catch (e) {
    yield put(JobSearchActions.getJobPostsAction.failure(e))
  }
}

export default function* main() {
  yield takeLatest(JobSearchActions.getJobPostsAction.REQUEST, getJobPosts)
}
