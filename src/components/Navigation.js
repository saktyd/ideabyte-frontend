import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;

  a {
    text-decoration: none;
    margin: 10px 10px;
    color: white;
  }
  border: none;
  box-sizing: none;
  opacity: 0.9;

  margin: 0 auto;
`

const LogoIdeaByte = styled.img`
  height: 25px;
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
      <LogoIdeaByte src="../assets/exports/logo-ideabyte.png" alt="" />
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
