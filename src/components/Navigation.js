import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;

  a {
    text-decoration: none;
    margin: 20px 40px;
    color: white;
  }
  border: none;
  box-sizing: none;
  opacity: 0.9;

  margin: 0 auto;
`

const LogoIdeaByte = styled.img`
  height: 50px;
`

const Navigation = () => {
  return (
    <NavStyle>
      <Link to="/">
        <b>Home</b>
      </Link>
      <Link to="/About">
        <b>About</b>
      </Link>
      <LogoIdeaByte src="../assets/exports/ideabyte-logo-white.png" alt="" />
      <Link to="/Register">
        <b>Register</b>
      </Link>
      <Link to="/Login">
        <b>Login</b>
      </Link>
    </NavStyle>
  )
}

export default Navigation
