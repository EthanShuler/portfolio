import React from 'react'
import styled from 'styled-components'
import Socials from '../Socials/Socials'

const Container = styled.div`

  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }

  a {
    color: #0033CC;

    &:hover {
      color: #0093CC;
      text-decoration: underline;
    }
  }
`

const Event = styled.div`
  background-color: #Dce3e6;
  margin: 2em auto;
  width: 40%;
  border-radius: 1rem;
  padding: 3em 1em;

  p {

  }

  h2 {
    text-align: center;
  }

  h3 {
    text-align: center;
    margin-bottom: 2rem;
  }
`

const Schedule = () => {
  return (
    <>
    <Container>
      <h1>Coming Soon!</h1>
      <Event>
        <h2>Stravinksy - The Rite of Spring</h2>
        <span></span>

        <h3>Frost Symphony Orchestra, under the direction of Maestro Gerard Schwarz</h3>
        <p>Ethan will be playing the famous bassoon solo</p>
        <a href='https://events.miami.edu/event/new_beginningsfrost_symphony_orchestra_3344'>Link to Tickets and Livestream</a>
        <p><strong>When: </strong>December 3rd, 2022 @7:30pm</p>
        <p><strong>Where: </strong>Gusman Concert Hall, Frost School of Music, Miami, FL</p>
      </Event>
      <Event>
        <h2>Solo Bassoon Recital</h2>
        <p>Repetoire includes: Jolivet Bassoon Concerto, Dubois Sonatine Tango, and more!</p>
        <p><strong>When: </strong>April 13, 2022 @11am</p>
        <p><strong>Where: </strong>Clarke Recital Hall, Frost School of Music, Miami, FL</p>
      </Event>
    </Container>
    <Socials />
    </>
    
  )
}

export default Schedule