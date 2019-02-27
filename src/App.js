import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/Home'
import About from './pages/About'
import Login from './pages/Home'

import styled from 'styled-components'

const ContainerStyle = styled.div`
  text-align: center;
  margin: 0 auto;
`

class App extends React.Component {
  render() {
    return (
      <Router>
        <ContainerStyle>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </ContainerStyle>
      </Router>
    )
  }
}

export default App
