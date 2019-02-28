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
const NavHover = styled.b`
  :hover {
    color: hsla(0, 0%, 80%, 1);
  }
`

const Navigation = () => {
  const isAuthenticated = false

  return (
    <NavStyle>
      <Link to="/">
        <NavHover>Home</NavHover>
      </Link>
      <Link to="/about">
        <NavHover>About</NavHover>
      </Link>
      <Link to="/">
        <LogoIdeaByte src="../assets/exports/ideabyte-logo-white.png" alt="" />
      </Link>
      {!isAuthenticated && (
        <Link to="/register">
          <NavHover>Register</NavHover>
        </Link>
      )}
      {!isAuthenticated && (
        <Link to="/login">
          <NavHover>Login</NavHover>
        </Link>
      )}
      {isAuthenticated && (
        <Link to="/profile">
          <NavHover>My Profile</NavHover>
        </Link>
      )}
      {isAuthenticated && (
        <Link to="/post">
          <NavHover>Post Idea</NavHover>
        </Link>
      )}
    </NavStyle>
  )
}

export default Navigation
