import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: #333;
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 1;
  /* margin-top: 200px; */
`

const Footer = () => {
  return <StyledFooter>Idea Byte &copy; 2019</StyledFooter>
}

export default Footer
