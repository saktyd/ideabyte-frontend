import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Home from './pages/Home'
import Register from './pages/Register'
import About from './pages/About'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import PostIdea from './pages/PostIdea'
import ExploreIdeas from './pages/ExploreIdeas'

import styled from 'styled-components'

// REDUX INITIAL STATE

const initialState = {
  isAuthenticated: false,

  user: {
    id: 1,
    avatar: '/assets/images/user-icon.svg',
    name: 'Sakti Dewantoro',
    email: 'saktyd@gmail.com',
    address: 'Kemang, Jakarta Selatan, Jakarta, Indonesia'
  },

  ideas: [
    {
      id: 1,
      image: '/assets/images/traveling.jpg',
      title: 'Tripvesto Trip Planner 1',
      short: "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner'
    },
    {
      id: 2,
      image: '/assets/images/traveling.jpg',
      title: 'Tripvesto Trip Planner 2',
      short: "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner'
    },
    {
      id: 3,
      image: '/assets/images/traveling.jpg',
      title: 'Tripvesto Trip Planner 3',
      short: "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner'
    },
    {
      id: 4,
      image: '/assets/images/traveling.jpg',
      title: 'Tripvesto Trip Planner 3',
      short: "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner'
    },
    {
      id: 5,
      image: '/assets/images/traveling.jpg',
      title: 'Tripvesto Trip Planner 3',
      short: "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner'
    }
  ]
}

// REDUX REDUCER

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE':
      return {
        user: state.user
      }
    case 'GET_IDEAS':
      return {
        ideas: state.ideas
      }
    case 'SET_ATHENTICATIONLOGIN':
      return {
        ...state,
        isAuthenticated: true
      }
    case 'SET_ATHENTICATIONLOGOUT':
      return {
        ...state,
        isAuthenticated: false
      }
    default:
      return state
  }
}

// REDUX CREATE STORE

const reduxStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// REACT APP COMPONENT

const ContainerStyle = styled.div`
  text-align: center;
  margin: 0 auto;
`

class App extends React.Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <Router>
          <ContainerStyle>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={MyProfile} />
              <Route path="/post" component={PostIdea} />
              <Route path="/explore" component={ExploreIdeas} />
            </Switch>
          </ContainerStyle>
        </Router>
      </Provider>
    )
  }
}

export default App
