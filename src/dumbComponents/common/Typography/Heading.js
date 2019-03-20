import React from "react"
import styled from "styled-components"

const headingTypes = {
  h1: "43px",
  h2: "36px",
  h3: "30px",
  h4: "24px",
  h5: "20px",
  h6: "16px",
  h7: "14px",
}

const Heading = styled.h1`
  font-family: ${props => `${props.font || "Rubik"}, sans-serif`};
  font-size: ${props => props.size || headingTypes[props.type]};
  font-weight: ${props => props.weight || "500"};
  font-style: normal;
  font-stretch: normal;
  line-height: ${props => props.lineHeight || 1};
  letter-spacing: ${props => props.spacing};
  ${props => (props.align ? `text-align: ${props.align};` : "")};
  color: ${props => props.color || "#354052"};
  margin: ${props => props.margin || "auto"};
  text-transform: ${props => props.transform};
  display: ${props => props.display};
  width: ${props => props.w || "auto"};
`

const H1 = Heading.withComponent("h1")
const H2 = Heading.withComponent("h2")
const H3 = Heading.withComponent("h3")
const H4 = Heading.withComponent("h4")
const H5 = Heading.withComponent("h5")
const H6 = Heading.withComponent("h6")

Heading.defaultProps = {
  type: "h1",
  align: "center",
  color: "#354052",
  lineHeight: 1.28,
  font: "carrara-bol",
  spacing: "normal",
  transform: "capitalize",
  display: "block",
}

const Component = ({ type, ...props }) => {
  switch (type) {
    case "h1":
      return <H1 type={type} {...props} />
    case "h2":
      return <H2 type={type} {...props} />
    case "h3":
      return <H3 type={type} {...props} />
    case "h4":
      return <H4 type={type} {...props} />
    case "h5":
      return <H5 type={type} {...props} />
    case "h6":
      return <H6 type={type} {...props} />
    default:
      return <H1 type={type} {...props} />
  }
}

export default Component
