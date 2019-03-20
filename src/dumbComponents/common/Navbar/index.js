import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Container from "dumbComponents/common/StyledComponents/Container"

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 0;
  border: none;
  /* position: fixed;
  top: 0;
  z-index: 1; */
  display: flex;
  align-items: center;
`

const NavBrand = styled.div`
  display: flex;
  align-items: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #354052;
  font-size: 24px;
  b {
    font-weight: bold;
  }
`

const Navbar = () => (
  <Nav>
    <Container>
      <NavBrand>
        <StyledLink to="/">
          <b>Job</b>
          Search
        </StyledLink>
      </NavBrand>
    </Container>
  </Nav>
)

export default Navbar
