import styled from "styled-components"

const CardHolder = styled.div`
  width: ${props => props.width};
  min-height: ${props => props.height}px;
  border-radius: 6px;
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin: 10px 0;
  padding: ${props => props.padding}px;
`
CardHolder.defaultProps = {
  width: "100%",
  height: "100",
  padding: "15",
}

export default CardHolder
