import * as JobSearchActions from "./actions"

const initState = {
  isFetchingJobs: false,
  jobResults: [],
  location: [],
  experience: [],
  filters: {
    skills: false,
    location: false,
    experience: false,
  },
  sortby: false,
}

export default function jobSearchReducer(state = initState, action) {
  switch (action.type) {
    case JobSearchActions.getJobPostsAction.REQUEST: {
      return {
        ...state,
        isFetchingJobs: true,
      }
    }
    case JobSearchActions.getJobPostsAction.SUCCESS: {
      return {
        ...state,
        isFetchingJobs: false,
        jobResults: action.data,
      }
    }
    case JobSearchActions.getJobPostsAction.FAILURE: {
      return {
        ...state,
        isFetchingJobs: false,
      }
    }
    case JobSearchActions.FILTER_LOCATION: {
      return {
        ...state,
        location: action.data,
      }
    }
    case JobSearchActions.FILTER_EXPERIENCE: {
      return {
        ...state,
        experience: action.data,
      }
    }
    case JobSearchActions.FILTER_RESULTS: {
      const { key, value } = action.data
      return {
        ...state,
        filters: {
          ...state.filters,
          [key]: value,
        },
      }
    }
    case JobSearchActions.SORT_RESULTS: {
      return {
        ...state,
        sortby: action.data,
      }
    }
    default:
      return state
  }
}
