import React from "react"
import styled from "styled-components"
import Paragraph from "dumbComponents/common/Typography/Paragraph"
import Container from "dumbComponents/common/StyledComponents/Container"
import CardHolder from "dumbComponents/common/StyledComponents/CardHolder"
import Tag from "dumbComponents/common/StyledComponents/Tag"
import Button from "dumbComponents/common/UI/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt, faBriefcase, faDatabase, faClock,
} from "@fortawesome/free-solid-svg-icons"

const Wrapper = styled.div`
  margin-top: 20px;
`

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const JobResultsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 20px;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const JobTitle = styled(Paragraph)`
  font-weight: 500;
`

const JobHighlighter = styled.div`
  display: flex;
  flex-flow: row wrap;
`
const HighlightItem = styled.label`
  color: #ced0da;
  margin-right: 20px;
`

const JobDescription = styled(Paragraph)`
  margin-top: 10px;
  color: #354052;
  font-size: 14px;
`
const CardItem = styled.div`
  margin: 10px 0;
`
const CardItemTitle = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #354052;
`

const SearchResults = ({ jobResults, filteredResults }) => (
  <Container>
    <Wrapper>
      <TotalWrapper>
        <Paragraph size="16" fontWeight="500">
          {`Search results: ${filteredResults.length}`}
        </Paragraph>
        <Paragraph size="16" fontWeight="500">
          {`Total jobs: ${jobResults.length}`}
        </Paragraph>
      </TotalWrapper>
      <JobResultsContainer>
        {filteredResults.map(job => (
          <CardHolder key={job.id}>
            <TitleContainer>
              <JobTitle>{`${job.title} ${job.type ? `(${job.type})` : ""}`}</JobTitle>
              {job.enddate && (
                <HighlightItem>
                  <FontAwesomeIcon icon={faClock} />
                  &nbsp;
                  {new Date(job.enddate).toLocaleDateString()}
                </HighlightItem>
              )}
            </TitleContainer>
            <JobHighlighter>
              {job.location && (
                <HighlightItem>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  &nbsp;
                  {job.location}
                </HighlightItem>
              )}
              {job.companyname && (
                <HighlightItem>
                  <FontAwesomeIcon icon={faBriefcase} />
                  &nbsp;
                  {job.companyname}
                </HighlightItem>
              )}
              {job.salary && (
                <HighlightItem>
                  <FontAwesomeIcon icon={faDatabase} />
                  &nbsp;
                  {`$${job.salary}`}
                </HighlightItem>
              )}
            </JobHighlighter>
            {job.experience && (
              <CardItem>
                <CardItemTitle>Experience:</CardItemTitle>
                <JobDescription>{job.experience}</JobDescription>
              </CardItem>
            )}
            {job.skills && (
              <CardItem>
                <CardItemTitle>Skills:</CardItemTitle>
                <JobDescription>
                  {job.skills.split(",").map(skill => (
                    <Tag>{skill}</Tag>
                  ))}
                </JobDescription>
              </CardItem>
            )}
            {job.jd && (
              <CardItem>
                <CardItemTitle>Descripiton:</CardItemTitle>
                <JobDescription>{job.jd}</JobDescription>
              </CardItem>
            )}
            {job.source && (
              <CardItem>
                <CardItemTitle>Source:</CardItemTitle>
                <JobDescription>{job.source}</JobDescription>
              </CardItem>
            )}
            {job.applylink && (
              <a href={job.applylink} target="_blank">
                <Button>Apply now</Button>
              </a>
            )}
          </CardHolder>
        ))}
      </JobResultsContainer>
    </Wrapper>
  </Container>
)

export default SearchResults
