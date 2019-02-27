import React from 'react'

class Register extends React.Component {
  render() {
    return (
      <div>
        <Section>
          <h2>Register your account</h2>
          <div>
            <label>Name:</label>
            <input type="text" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" />
          </div>
          <input type="submit" value="Register" />
        </Section>
        <Footer />
      </div>
    )
  }
}

export default Register
