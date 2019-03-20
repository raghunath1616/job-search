import React from "react"
import styled from "styled-components"
import Textbox from "dumbComponents/common/UI/Textbox"
import Button from "dumbComponents/common/UI/Button"
import Select from "dumbComponents/common/UI/Select"
import Container from "dumbComponents/common/StyledComponents/Container"

const Wrapper = styled.div`
  background: #f2f4f8;
  padding: 30px 0;
`

const SearchWrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`

const SearchItem = styled.div`
  flex: 5 auto;
  margin: 0 20px;
  &:first-of-type,
  &:last-of-type {
    margin: 0;
  }
`

const SearchButton = styled.div`
  flex: 1 auto;
`

const Filters = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 10px;
  justify-content: space-between;
`

const FilterItem = styled.div``

const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
`

const MainSearch = ({
  experience, location, onFilter, sortResults,
}) => (
  <Wrapper>
    <Container>
      <SearchWrapper>
        <SearchItem>
          <Select onChange={e => onFilter("experience", e.target.value)}>
            <option value="">Select experience</option>
            {experience.map(exp => (
              <option key={exp}>{exp}</option>
            ))}
          </Select>
        </SearchItem>
        <SearchItem>
          <Select onChange={e => onFilter("location", e.target.value)}>
            <option value="">Select location</option>
            {location.map(loc => (
              <option key={loc}>{loc}</option>
            ))}
          </Select>
        </SearchItem>
        <SearchButton>
          <Button width="100%" borderRadius="2">
            Search
          </Button>
        </SearchButton>
      </SearchWrapper>
      <Filters>
        <FilterItem>
          <Textbox id="skill search" placeholder="Search by skills" onKeyUp={e => onFilter("skills", e.target.value)} />
        </FilterItem>
        <FilterItem>
          <Select onChange={e => sortResults(e.target.value)}>
            <option value="">Select sort</option>
            <option value="location">Sort by location</option>
            <option value="experience">Sort by experience</option>
          </Select>
        </FilterItem>
      </Filters>
    </Container>
  </Wrapper>
)

export default MainSearch
