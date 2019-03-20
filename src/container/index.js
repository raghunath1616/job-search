import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as JobSearchActions from "./actions"
import { getJobs } from "./selector"

const mapStateToProps = (state) => {
  const { jobs } = state
  return {
    ...jobs,
    filteredResults: getJobs(state),
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      getJobPosts: JobSearchActions.getJobPostsAction.request,
      filterResults: JobSearchActions.filterResultsAction,
      sortResults: JobSearchActions.sortResultsAction,
    },
    dispatch
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
