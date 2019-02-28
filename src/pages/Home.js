import React from 'react'
import HeaderHome from '../components/HeaderHome'
import Footer from '../components/Footer'
import styled from 'styled-components'

const CardStyle = styled.div`
  display: flex;
  font-family: 'Fira Sans', sans-serif;
  flex-direction: column;
  background: #fafafa;
  border-radius: 4px;
  width: 300px;
  margin: 10px;
  color: #333;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
`

const CardImage = styled.img`
  border-radius: 4px 4px 0 0;
`

const ContainerCards = styled.div`
  display: flex;

  flex-direction: row;
  padding-left: 13%;
  padding-right: 10%;
  -webkit-flex-wrap: wrap;
`

const ContentCardTop = styled.div`
  padding: 20px;
  text-align: left;
`
const ContentCardBottom = styled.div`
  padding: 0px 20px 20px 20px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
`
const CardDescription = styled.h4`
  font-family: 'Fira Sans', sans-serif;
`

const TitleCard = styled.h3`
  margin: 0px auto;
`
const ContainerName = styled.div`
  display: flex;
  text-align: left;
`
const ContainerDate = styled.div`
  display: flex;
  text-align: left;
`
const ContainerLocation = styled.div`
  display: flex;
  text-align: left;
`

const UserIcon = styled.img`
  height: 25px;
  margin-right: 30px;
`
const DateIcon = styled.img`
  height: 25px;
  margin-right: 30px;
`
const LocationIcon = styled.img`
  height: 25px;
  margin-right: 32px;
  margin-left: 1px;
`

const Home = () => {
  const cards = [
    {
      id: 1,
      image: '/assets/images/traveling.jpg',
      title: 'Tripvesto',
      description: 'App to plan and gather your friends to travel',
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia'
    },
    {
      id: 2,
      image: '/assets/images/traveling.jpg',
      title: 'Tripvesto',
      description: 'App to plan and gather your friends to travel',
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia'
    },
    {
      id: 3,
      image: '/assets/images/traveling.jpg',
      title: 'Tripvesto',
      description: 'App to plan and gather your friends to travel',
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia'
    },
    {
      id: 4,
      image: '/assets/images/traveling.jpg',
      title: 'Tripvesto',
      description: 'App to plan and gather your friends to travel',
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia'
    },
    {
      id: 5,
      image: '/assets/images/traveling.jpg',
      title: 'Tripvesto',
      description: 'App to plan and gather your friends to travel',
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia'
    },
    {
      id: 6,
      image: '/assets/images/traveling.jpg',
      title: 'Tripvesto',
      description: 'App to plan and gather your friends to travel',
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia'
    }
  ]

  return (
    <div>
      <HeaderHome />
      <ContainerCards>
        {cards.map((item, index) => {
          return (
            <CardStyle key={index}>
              <CardImage src={item.image} alt={item.title} />
              <ContentCardTop>
                <TitleCard>
                  {item.title} {index + 1}
                </TitleCard>
                <CardDescription>{item.description}</CardDescription>
              </ContentCardTop>

              <ContentCardBottom>
                <ContainerName>
                  <UserIcon src="../assets/images/user-icon.svg" alt="" />
                  {item.author}
                </ContainerName>
                <ContainerDate>
                  <DateIcon src="../assets/images/date-icon.svg" alt="" />
                  {item.date}
                </ContainerDate>
                <ContainerLocation>
                  <LocationIcon
                    src="../assets/images/location-icon.svg"
                    alt=""
                  />
                  {item.location}
                </ContainerLocation>
              </ContentCardBottom>
            </CardStyle>
          )
        })}
      </ContainerCards>
      <Footer />
    </div>
  )
}

export default Home
