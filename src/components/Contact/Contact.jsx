import React from 'react'
import styled from 'styled-components'
import Socials from '../Socials/Socials'

const ContactInfo = styled.div`
  text-align: center;
  white-space: nowrap;

  a {
    color: #0033CC;

    &:hover {
      color: #0093CC;
      text-decoration: underline;
    }
  }
`

const Contact = () => {
  return (
    <>
    <ContactInfo>
      <h1>Contact</h1>
      <p><strong>Email: </strong>13ethanshuler@gmail.com</p>
      <p><strong>Website: </strong><a href='www.ethanshuler.com'>www.ethanshuler.com</a></p>
    </ContactInfo>
    <Socials />
    </>
  )
}

export default Contact