import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'

const StyledHeader = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(51, 51, 51, 0.8),
      rgba(51, 51, 51, 0.8)
    ),
    url('/assets/images/cover-background.jpg');
  border: 1px solid #000000;
  background-size: cover;
  box-sizing: border-box;
  border-bottom: 4px solid hsla(45, 86%, 62%, 1);
  opacity: 0.9;
  display: flex;
  text-align: center;
  flex-direction: column;
  height: 100px;
  margin: 0 auto;
`

const HeaderLogin = () => {
  return (
    <div>
      <StyledHeader>
        <Navigation />
      </StyledHeader>
    </div>
  )
}

export default HeaderLogin
