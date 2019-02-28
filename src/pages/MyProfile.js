import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import styled from 'styled-components'

const AvatarImage = styled.img`
  height: 100px;
  margin-top: 30px;
`
const UserProfile = styled.div`
  margin: 20px auto;
  flex: 1;
  font-family: 'Fira Sans', sans-serif;
`
const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Fira Sans', sans-serif;
  height: 100vh;
`
const ProfileDiscribe = styled.div`
  text-align: left;
  margin: 50px auto;
`

const ButtonLogout = styled.button`
  background-color: #ff4000;
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
    background-color: #ff6633;
  }
`

const MyProfile = props => {
  const user = props.user
  return (
    <ContainerProfile>
      <Header />
      <UserProfile>
        <AvatarImage src={user.avatar} alt="" />
        <ProfileDiscribe>
          <p>
            {' '}
            <b>Name:</b> {user.name}
          </p>
          <p>
            {' '}
            <b>Email:</b> {user.email}
          </p>
          <p>
            {' '}
            <b>Address:</b> {user.address}
          </p>
        </ProfileDiscribe>
        <ButtonLogout
          onClick={() => {
            props.dispatch({
              type: 'SET_ATHENTICATIONLOGOUT'
            })
          }}
        >
          <b>Logout</b>
        </ButtonLogout>
      </UserProfile>
      <Footer />
    </ContainerProfile>
  )
}

const mapStateToStore = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToStore)(MyProfile)
