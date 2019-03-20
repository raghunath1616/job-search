import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

const AutocompleteItem = styled.div`
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
  &:hover {
    background-color: #e9e9e9;
  }
`

const Autocomplete = ({ children }) => <Wrapper>{children}</Wrapper>

export default Autocomplete
