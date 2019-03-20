import { createSignalAction, createActionCreator } from "shared/reduxUtils"

const BASE = "APP"

export const FILTER_LOCATION = "FILTER_LOCATION"
export const FILTER_EXPERIENCE = "FILTER_EXPERIENCE"
export const FILTER_RESULTS = "FILTER_RESULTS"
export const SORT_RESULTS = "SORT_RESULTS"

export const getJobPostsAction = createSignalAction(BASE, "GET_JOB_POSTS")

export const filterLocationAction = createActionCreator(FILTER_LOCATION)
export const filterExperienceAction = createActionCreator(FILTER_EXPERIENCE)
export const filterResultsAction = createActionCreator(FILTER_RESULTS)
export const sortResultsAction = createActionCreator(SORT_RESULTS)
