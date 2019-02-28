import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const RegisterContent = styled.form`
  flex: 1;
`

const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Fira Sans', sans-serif;
  height: 100vh;
`

const Register = () => {
  return (
    <ContainerRegister>
      <Header />
      <RegisterContent>
        <h2>Register your account</h2>
        <div>
          <label>Full name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email address:</label>
          <input type="email" />
        </div>
        <div>
          <label> Confirm email address:</label>
          <input type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <input type="submit" value="Register" />
      </RegisterContent>
      <Footer />
    </ContainerRegister>
  )
}

export default Register
