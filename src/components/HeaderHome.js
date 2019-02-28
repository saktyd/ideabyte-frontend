import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
  background-size: cover;
  border-bottom: 4px solid hsla(45, 86%, 62%, 1);
  box-sizing: border-box;
  opacity: 0.9;
  display: flex;
  text-align: center;
  flex-direction: column;
  height: 335px;
  margin: 0 auto;
`

const PararagraphHeader = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-size: 30px;
  color: white;
  margin: 0px auto;
`

const ButtonGetStarted = styled.button`
  background-color: #6fcf97;
  color: solid black;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 4px;
  border-color: black;
  width: 150px;
  height: 35px;
  margin: 0 20px;
  a {
    text-decoration: none;
    color: #333333;
  }
`

const ButtonExploreIdeas = styled.button`
  background-color: #f2c94c;
  color: solid black;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 4px;
  border-color: black;
  width: 150px;
  height: 35px;
  margin: 0 20px;
  a {
    text-decoration: none;
    color: #333333;
  }
  :hover {
    color: black;
  }
`
const SearchStyle = styled.form`
  background-color: #333333;
  font-family: 'Fira Sans', sans-serif;
  color: white;
  width: 110px;
  margin: 0 15px;
  border: none;
`
const SpanDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #333333;
  height: 35px;
  margin-bottom: 25px;
`
const SearchBar = styled.input`
  background-color: #333333;
  border: none;
  font-size: 15px;
`

const SearchLogo = styled.img`
  width: 15px;
  height: 15px;
`
const ButtonCTAHome = styled.div`
  margin: 20px 20px 50px 20px;
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
              <b>Shares and improve your ideas</b>
            </p>
            <p>
              {' '}
              <b> with the world</b>
            </p>
          </PararagraphHeader>

          <ButtonCTAHome>
            <ButtonGetStarted>
              <Link to="/register">
                <b>Get Started</b>
              </Link>
            </ButtonGetStarted>
            <ButtonExploreIdeas>
              <Link to="/explore">
                <b>Explore Ideas</b>
              </Link>
            </ButtonExploreIdeas>
          </ButtonCTAHome>
        </StyledHeader>
        <SpanDiv>
          <SearchLogo src="../assets/images/search-icon.svg" />
          <SearchStyle action="">
            <SearchBar type="text" placeholder="Search Ideas..." />
          </SearchStyle>
        </SpanDiv>
      </div>
    )
  }
}

export default HeaderHome
