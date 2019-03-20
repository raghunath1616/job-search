import styled from "styled-components"

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: ${props => props.pl}px;
  padding-right: ${props => props.pl}px;
  max-width: 1440px;
  width: 100%;
`
Container.defaultProps = {
  pl: "90",
  pr: "90",
}

export default Container
