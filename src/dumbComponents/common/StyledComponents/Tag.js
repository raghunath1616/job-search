import styled from "styled-components"

const Tag = styled.div`
  display: inline-flex;
  margin: 5px;
  font-size: 12px;
  padding: 2px 5px 2px 5px;
  text-align: left;
  color: ${props => (props.color ? props.color : "#ffffff")};
  font-weight: normal;
  background: ${props => (props.background ? props.background : "#354052")};
  border: ${props => props.border};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`
export default Tag
