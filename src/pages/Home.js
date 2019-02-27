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
  padding-left: 10%;
  padding-right: 10%;
  -webkit-flex-wrap: wrap;
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
              <h3>
                {item.title} {index + 1}
              </h3>
              <p>{item.description}</p>

              <div>
                <p>{item.author}</p>
                <p>{item.date}</p>
                <p>{item.location}</p>
              </div>
            </CardStyle>
          )
        })}
      </ContainerCards>
      <Footer />
    </div>
  )
}

export default Home
