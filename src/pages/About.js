import React from 'react'
import styled from 'styled-components'

import HeaderAbout from '../components/HeaderAbout'
import Footer from '../components/Footer'

// Use Vipot Height
const ContainerPage = styled.div`
  display: flex;

  flex-direction: column;
  font-family: 'Fira Sans', sans-serif;
`
const Section = styled.section`
  width: 500px;
  margin: 0 auto;
  text-align: left;
`
const StraightLine = styled.p`
  border-bottom: 2px solid #6fcf97;
  width: 300px;
  margin: 0 auto;
`
const SectionBottom = styled.p`
  margin-bottom: 50px;
`

const About = () => {
  return (
    <ContainerPage>
      <HeaderAbout />
      <h1 size={2} scheme="light">
        About Idea Byte
      </h1>

      <Section>
        <p>
          <span role="img" aria-label="bulb">
            💡
          </span>
          Idea Byte helps ideators, innovators, developers, and any other humans
          to find and share ideas for inspiration. To date, there has been
          plenty of ideas — big and small — have come to be shared in the
          community.
        </p>
        <p>
          Welcome to{' '}
          <span role="img" aria-label="bulb">
            💡
          </span>
          Idea Byte!
        </p>
        <StraightLine />
      </Section>
      <Section>
        <p>
          This full stackweb application is developed in just 5 days at{' '}
          <a href="https://impactbyte.com">Impact Byte</a>, the fastest
          intensive full stack web with JavaScript technologies coding bootcamp
          on Earth. Visit{' '}
          <a href="https://impactbyte.com">https://impactbyte.com</a>
        </p>
        <p>
          To see the whole source code of this application, visit{' '}
          <a href="https://github.com/ideabyte">https://github.com/ideabyte</a>
        </p>
        <SectionBottom>
          We use Git, GitHub, Figma, VS Code, HTML5, CSS3, JavaScript, React,
          React Hot Reload, React Router, React Helmet, Emotion, Redux, Netlify,
          Node.js, Express, MongoDB, Mongoose, MySQL, Knex.js, Objection.js,
          Heroku, Google Cloud Platform, and variety of other tools on Linux and
          macOS.
        </SectionBottom>
      </Section>
      <Footer />
    </ContainerPage>
  )
}

export default About
