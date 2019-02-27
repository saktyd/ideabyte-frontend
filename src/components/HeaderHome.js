import React, { Component } from 'react'

import styled from 'styled-components'
import Navigation from './Navigation'

const StyledHeader = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(51, 51, 51, 0.8),
      rgba(51, 51, 51, 0.8)
    ),
    url('../assets/images/cover-background.jpg');
  border: 1px solid #000000;
  box-sizing: border-box;
  opacity: 0.9;
  display: flex;
  text-align: center;
  flex-direction: column;
  height: 320px;
  margin: 0 auto;
`

const PararagraphHeader = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-size: 24px;
  color: white;
  margin: 40px auto;
`

const ButtonGetStarted = styled.button`
  background-color: #6fcf97;
  color: solid black;
  box-sizing: border-box;
  border-radius: 4px;
  border-color: black;
  width: 100px;
  height: 25px;
  margin: 0 20px;
`

const ButtonExploreIdeas = styled.button`
  background-color: #f2c94c;
  color: solid black;
  box-sizing: border-box;
  border-radius: 4px;
  border-color: black;
  width: 100px;
  height: 25px;
  margin: 0 20px;
`
const SearchStyle = styled.form`
  background-color: #333333;
  font-family: 'Fira Sans', sans-serif;
  color: white;
  width: 110px;
  margin: 0 2px;
  border: none;
  font-size: 14px;
`
const SpanDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #333333;
  height: 35px;
  margin-bottom: 25px;
`

const SearchLogo = styled.img`
  width: 15px;
  height: 15px;
`
const ButtonCTAHome = styled.div`
  margin-bottom: 30px;
`

class HeaderHome extends Component {
  render() {
    return (
      <div>
        <StyledHeader>
          <Navigation />
          <PararagraphHeader>
            <p>
              {' '}
              <b>Shares and improve your ideas</b>{' '}
            </p>
            <p>
              {' '}
              <b> with the world</b>
            </p>
          </PararagraphHeader>

          <ButtonCTAHome>
            <ButtonGetStarted>
              <b>Get Started</b>{' '}
            </ButtonGetStarted>
            <ButtonExploreIdeas>
              <b>Explore Ideas</b>{' '}
            </ButtonExploreIdeas>
          </ButtonCTAHome>
        </StyledHeader>
        <SpanDiv>
          <SearchLogo src="../assets/images/search-icon.svg" />
          <SearchStyle>Search Ideas...</SearchStyle>
        </SpanDiv>
      </div>
    )
  }
}

export default HeaderHome
