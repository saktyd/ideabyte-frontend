import React from 'react'
import Footer from '../components/Footer'
import HeaderLogin from '../components/HeaderLogin'
import styled from 'styled-components'

const LoginContent = styled.form`
  flex: 1;
`

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Fira Sans', sans-serif;
  height: 100vh;
`

class Login extends React.Component {
  render() {
    return (
      <ContainerLogin>
        <HeaderLogin />
        <LoginContent>
          <h2>Login to your account</h2>

          <div>
            <label>Email address:</label>
            <input type="email" />
          </div>

          <div>
            <label>Password:</label>
            <input type="password" />
          </div>
          <input type="submit" value="Login" />
        </LoginContent>
        <Footer />
      </ContainerLogin>
    )
  }
}

export default Login
