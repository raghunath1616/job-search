import React from "react"
import Container from "container"
import MainSearch from "./MainSearch"
import SearchResults from "./SearchResults"

class JobSearch extends React.Component {
  componentDidMount() {
    const { getJobPosts } = this.props
    getJobPosts()
  }

  onFilter = (key, value) => {
    const { filterResults } = this.props
    filterResults({ key, value })
  }

  render() {
    const {
      experience, location, filteredResults, filters, jobResults, sortResults,
    } = this.props
    return (
      <div>
        <MainSearch
          experience={experience}
          location={location}
          filters={filters}
          sortResults={sortResults}
          onFilter={this.onFilter}
        />
        <SearchResults jobResults={jobResults} filteredResults={filteredResults} />
      </div>
    )
  }
}

export default Container(JobSearch)
