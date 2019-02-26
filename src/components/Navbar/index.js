import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from '../../images/Logo.png';

const StyledNav = styled.div`
  font-size: 20px;
  background-color: black;
  color: white;
  text-align: center;
`;

const StyledLi = styled.li`
  display: inline-block;
  margin: 0 30px;
`;

const StyledImg = styled.img`
  margin: 0 50px;
`;

class Navbar extends Component {
  render() {
    return (
      <StyledNav>
        <ul>
          <StyledLi>Home</StyledLi>
          <StyledLi>About</StyledLi>
          <StyledLi>
            <StyledImg src={Logo} alt="" />
          </StyledLi>
          <StyledLi>Register</StyledLi>
          <StyledLi>Login</StyledLi>
        </ul>
      </StyledNav>
    );
  }
}

export default Navbar;
