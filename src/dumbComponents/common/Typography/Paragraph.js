import styled from "styled-components"

const Paragraph = styled.p`
  font-family: "Rubik", sans-serif;
  font-size: ${props => props.size}px;
  line-height: ${props => props.lineHeight};
  color: ${props => props.color};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 300)};
  text-align: ${props => props.align};
  margin-bottom: ${props => props.mb};
  margin-top: ${props => props.mt}px;
  margin: ${props => props.m};
  display: ${props => props.display};
  width: ${props => (props.w ? props.w : "auto")};
  text-transform: ${props => props.textTransform};
  word-break: ${props => props.wordBreak};
`

Paragraph.defaultProps = {
  size: "20",
  lineHeight: 1.71,
  align: "left",
  color: "#354052",
  fontWeight: 300,
  mb: "inherit",
  display: "block",
  textTransform: "inherit",
}

export default Paragraph
