import React from 'react'
import styled from 'styled-components'
import { device } from '../../utils/Devices'
import { useState } from 'react'
import ethan_phil from './ethan_phil.jpg'

const AboutContainer = styled.div`
  padding: 4em;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1em;
  margin: 0 auto;

  @media screen and ${device.tablet} {
    padding-left: 0;
    margin: 0 0.5em;
  }
`

const AboutSection = styled.div`
  line-height: var(--line-height);

  p {
    line-height: var(--line-height);
    padding: 1em 0;
  }

  @media screen and ${device.tablet} {
    padding: 1em;
  }

  h2 {
    padding-top: 1em;
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

const MyStory = () => {
  return (
    <AboutSection>
      <h2>My Story</h2>
      <p>
        <p>Hello and welcome to my website! Here you will find information about my career as a bassoonist, get to know who I am as a person, and hear me play. I grew up in Milwaukee, Wisconsin with two musician parents and a musically talented brother. Once I graduate with my master’s degree, it will be the ninth music degree in my family of four! My earliest musical experiences involved singing at home with my family. I joined the Milwaukee Children’s choir in elementary school and fell in love with singing. Once I joined the Bel Canto Boy’s choir, I would solo with the adult choir, play the role of Amahl in Amahl and the Night Visitors with the Milwaukee Opera Theater, and even record for a TV commercial!</p>
        <p>I started playing the bassoon in the fifth grade - I wanted to play trombone but I was too small to reach the furthest slide positions! I quickly fell in love with bassoon and thanks to my fabulous teacher, Andrew Jackson, I stuck with it. My first exposure to orchestral playing occurred once I joined the Milwaukee Youth Symphony Orchestra in my last two years of high school, cementing my desire to play music for the rest of my life.</p>
        <p>I attended the University of Colorado-Boulder on a music scholarship and double majored in bassoon performance and computer science. At CU, I had the fortune of playing in the school’s fantastic Wind Symphony and Symphony Orchestra; I also played in the pit for West Side Story, had many memorable chamber experiences like performing Poulenc’s Sextet, and taught private lessons. Sadly, my senior recital was scheduled to happen on March 18th, just two days after the school closed for the COVID-19 pandemic.</p>
        <p>I somehow graduated in four years with both degrees, earning the Chancellor’s Achievement Award for my GPA, and took a year to work in tech. I first worked in IT at a K-12 school due to the increased technology demands that come with hybrid learning. I then was a software engineer in the Milwaukee area. During this time, I entered and won first prize in the Australian Double Reed Society bassoon competition.</p>
        <p>My work in the tech sector was interrupted by an offer to attend the Frost School of Music and study with Gabriel Beavers as a Henry Mancini Institute Fellow. For the last year, I have been in Miami practicing hard, making lots of reeds, and playing in various ensembles, such as the Henry Mancini Institute Orchestra, the Palm Beach Symphony (as a substitute), and the Frost Symphony Orchestra.</p>
      </p>
    </AboutSection>
  )
}

const AboutPanel = styled.div`
margin: 0 auto;
max-width: 80%;
padding: 2em;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
margin-bottom: 2em;

  @media screen and ${device.tablet} {
    margin: 0 auto;
    max-width: 100%;
  }
`

const BioImage = styled.img`
  max-width: 80%;
  
  object-fit: contain;
  
  @media screen and ${device.tablet} {
  }
`

const AboutButton = styled.button`
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 1em;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: 12em;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  &:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);

  &:active {
    background-color: #F0F0F1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
`

const ButtonHolder = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

const AboutSelector = ({ setBio, setValues, setMyStory }) => {
  return (
    <ButtonHolder>
      <AboutButton onClick={setBio}>Bio</AboutButton>
      <AboutButton onClick={setValues}>Values</AboutButton>
      <AboutButton onClick={setMyStory}>My Story</AboutButton>
    </ButtonHolder>
  )
}

const About = () => {
  const [aboutSelection, setAboutSelection] = useState(0)
  const setBio = () => setAboutSelection(0)
  const setValues = () => setAboutSelection(1)
  const setMyStory = () => setAboutSelection(2)


  let aboutDisplay;
  if (aboutSelection === 0) {
    aboutDisplay = <Bio />
  } else if (aboutSelection === 1) {
    aboutDisplay = <Values />
  } else {
    aboutDisplay = <MyStory />
  }

  return (
    <AboutContainer id="about">
      <BioImage src={ethan_phil} alt="Ethan playing bassoon, his brother Phil playing French Horn" />
      <AboutPanel>
        <AboutSelector setBio={setBio} setValues={setValues} setMyStory={setMyStory} />
        {aboutDisplay}
      </AboutPanel>
    </AboutContainer>
  )
}

export default About