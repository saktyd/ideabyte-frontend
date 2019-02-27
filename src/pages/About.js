import React from 'react'
import styled from 'styled-components'

import HeaderAbout from '../components/HeaderAbout'
import Footer from '../components/Footer'

// Use Vipot Height
const ContainerPage = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`
const Section = styled.section`
  flex: 1;
  width: 500px;
  margin: 0 auto;
`

const About = () => {
  return (
    <ContainerPage>
      <HeaderAbout />
      <Section>
        <h2>About Page</h2>
        <p>
          Idea Byte helps ideators, innovators, developers, and any other humans
          to find and share ideas for inspiration. To date, there has been
          plenty of ideas — big and small — have come to be shared in the
          community.
        </p>
        <p>Welcome to Idea Byte!</p>
      </Section>
      <Footer />
    </ContainerPage>
  )
}

export default About
