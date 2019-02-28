import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styled from 'styled-components'
import { connect } from 'react-redux'

const LoginContent = styled.form`
  flex: 1;
`

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Fira Sans', sans-serif;
  height: 100vh;
`
const ButtonLogin = styled.input`
  background-color: #6fcf97;
  color: solid #333333;
  font-size: 14px;
  border-radius: 4px;
  border-color: black;
  width: 150px;
  height: 35px;
  margin: 0 20px;
  font-family: 'Fira Sans', sans-serif;
  :hover {
    cursor: pointer;
    background-color: #99ffbb;
  }
  margin-top: 30px;
`

const Login = props => {
  return (
    <ContainerLogin>
      <Header />
      <LoginContent
        onSubmit={event => {
          event.preventDefault()

          props.dispatch({
            type: 'SET_ATHENTICATIONLOGIN'
          })
        }}
      >
        <h2>Login to your account</h2>

        <div>
          <label>Email address:</label>
          <input type="email" placeholder="yourname@domain.com" />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" placeholder="your_password" />
        </div>
        <ButtonLogin type="submit" value="Login" />
      </LoginContent>
      <Footer />
    </ContainerLogin>
  )
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

export default connect(mapStateToProps)(Login)
