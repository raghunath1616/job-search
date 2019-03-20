import { createSelector } from "reselect"

const getJobResults = state => state.jobs.jobResults
const getFilters = state => state.jobs.filters
const getSortBy = state => state.jobs.sortby

export const getJobs = createSelector(
  [getJobResults, getFilters, getSortBy],
  (jobResults = [], filters, sortby) => {
    let isFilterApplied = false
    const filterResults = jobResults.filter((job) => {
      const j = Object.keys(filters).filter((key) => {
        if (filters[key]) {
          isFilterApplied = true
        }
        if (!job[key].toLowerCase().includes(filters[key] ? filters[key].toLowerCase() : false)) {
          return false
        }
        return true
      })
      return j.length || false
    })
    if (!isFilterApplied && sortby) {
      console.log("filterResults", filterResults)
      jobResults.sort((a, b) => (a[sortby] < b[sortby] ? -1 : a[sortby] > b[sortby] ? 1 : 0))
    } else if (sortby) {
      filterResults.sort((a, b) => (a[sortby] < b[sortby] ? -1 : a[sortby] > b[sortby] ? 1 : 0))
    }
    if (!isFilterApplied) {
      return [...jobResults]
    }
    return [...filterResults]
  }
)
