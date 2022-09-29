import React from 'react'
import styled from 'styled-components'
import headshot from './HeroImg.png'
import { device } from '../../utils/Devices'

const HeroContainer = styled.section`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;

  padding: 4em;

  background-image: url(${headshot});
  background-size: cover;

  @media screen and ${device.tablet} {
    padding: 0;
    flex-direction: column-reverse;
    justify-content: center;
  }
`

const Title = styled.div`
  color: white;
  font-family: 'Source Serif Pro', serif;
  font-size: 5em;
  position: absolute;
  bottom: 1em;
  left: 1em;

  @media screen and ${device.tablet} {
    text-align: center;
    margin: 0 auto;
    width: 100%;
    font-size: 3em;
    left: 0;
  }

  @media screen and ${device.mobile} {
    font-size: 2em;
  }
`

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <Title>
        <h1>Ethan Shuler</h1>
        <h2>Bassoonist</h2>
      </Title>
    </HeroContainer>
  )
}

export default Hero