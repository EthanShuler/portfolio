import React from 'react'
import styled from 'styled-components'
import { device } from '../../utils/Devices'
import Resume from '../Resume/Resume'
import Socials from '../Socials/Socials'
import ethan from './Ethan.jpg'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Biography = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1em;
  height: 100%;

  margin: 0 auto;
  max-width: 95.75em;

  @media screen and ${device.tablet} {
    padding: 2em 0;
    margin: 0 0.5em;
    flex-direction: column;
  }
`

const AboutSection = styled.div`
  p {
    line-height: 2em;
    padding: 1em 0;
  }

  @media screen and ${device.tablet} {
    padding: 1em;
  }

  h2 {
    text-align: center;
  }
`

const Bio = () => {
  return (
    <AboutSection>
      <h2>Bio</h2>
      <p>Bassoonist Ethan Shuler graduated from the University of Colorado-Boulder in
        May of 2020. At CU, Ethan studied music performance and computer science,
        graduating with highest honors. Ethan's bassoon teachers have included Andrew
        Jackson, Dr. Yoshi Ishikawa, and Gabriel Beavers. Mr. Shuler is also an active
        member of the International Double Reed Society, working on the film/livestreaming
        crew at the previous two US-based conferences, volunteering at the
        2022 conference in Boulder, and performing at the 2022 conference.
        Ethan won first prize in the  Australian Double Reed Society's 2020 bassoon
        competition with his performance of Carolyn Morris's "Bassoon Boogie" and of
        Franciso Mignone's Walzes. Ethan has participated
        in masterclasses with esteemed musicians such as Billy Short, Kathleen McLean, Anne
        Epperson, Steve Braunstein, and Andrea Cellacchi; beyond performing chamber music with friends and
        classmates, Ethan has collaborated on stage with musicians including Bill Douglas,
        Billy Short, and Yoshi Ishikawa. When he is not playing bassoon, you can find
        Ethan learning new programming skills, listening to jazz, or making reeds while
        rewatching Lord of the Rings.
      </p>
    </AboutSection>
  )
}

const Values = () => {
  return (
    <AboutSection>
      <h2>Values</h2>
      <p>
        I am strictly committed to fostering an inclusive, kind, and empathetic approach
        to teaching and performing music. I believe that with the right teachers and work
        ethic, anybody can play beautiful music.
      </p>
    </AboutSection>
  )
}

const AboutText = styled.div`
min-padding: 2em;
width: 50%;

p {
  max-width: 80%;
  margin: auto;
}

@media screen and ${device.tablet} {
  width: 100%;
}
`

const AboutImage = styled.div`
width: 50%;
height: 80vh;
margin: 1em;
background-image: url(${ethan});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
overflow: hidden;

@media screen and ${device.tablet} {
  position: relative;
  width: 100%;
  height: 40em;
}
`

const About = () => {
  return (
    <AboutContainer id="about">
      <Biography>
        <AboutText>
          <Bio />
          <Values />
        </AboutText>
        <AboutImage />
      </Biography>
      <Resume />
      <Socials />
    </AboutContainer>
  )
}

export default About