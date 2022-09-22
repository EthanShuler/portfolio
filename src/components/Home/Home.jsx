import React from 'react'
import styled from 'styled-components'
import headshot from './headshot.png'
import Navbar from '../Navbar/Navbar'
import { device } from '../../utils/Devices'

const HeroContainer = styled.section`
  height: 100%;
  width: 100%;
  padding-top: 5em;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;

  padding-left: 12.5em;
  padding-top: 4em;
  padding-bottom: 4em;

  @media screen and ${device.tablet} {
    padding-left: 0;
    flex-direction: column-reverse;
    justify-content: center;
  }
`

const Title = styled.div`
  font-family: 'Source Serif Pro', serif;
  font-size: 3em;

  @media screen and ${device.tablet} {
    text-align: center;
  }

  @media screen and ${device.mobile} {
    font-size: 2em;
  }
`

const HeroImg = styled.img`
  max-width: max-content;
  object-fit: cover;
  overflow: hidden;
`

const Hero = () => {
  return (
    <div>
      <Navbar />
      <HeroContainer id="hero">
        <HeroImg src={headshot} alt="Headshot" />
        <Title>
          <h1>Ethan Shuler</h1>
          <h2>Bassoonist</h2>
        </Title>
      </HeroContainer>
    </div>

  )
}

export default Hero