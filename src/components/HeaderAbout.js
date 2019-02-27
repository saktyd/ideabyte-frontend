import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

const StyledHeader = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(51, 51, 51, 0.8),
      rgba(51, 51, 51, 0.8)
    ),
    url('/assets/images/cover-background.jpg');
  border: 1px solid #000000;
  box-sizing: border-box;
  opacity: 0.9;
  display: flex;
  text-align: center;
  flex-direction: column;
  height: 250px;
  margin: 0 auto;
`

const PararagraphHeader = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-size: 30px;
  color: white;
  margin: 40px auto;
`

const HeaderAbout = () => {
  return (
    <div>
      <StyledHeader>
        <Navigation />
        <PararagraphHeader>
          <p>
            <b>Shares and improve your ideas</b>
          </p>
          <p>
            <b> with the world</b>
          </p>
        </PararagraphHeader>
      </StyledHeader>
    </div>
  )
}

export default HeaderAbout
