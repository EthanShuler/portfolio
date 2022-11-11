import React from 'react'
import styled from 'styled-components'
import epk from './epk.pdf'
import Button from '../Button'
import Socials from '../Socials/Socials'

const quotes = [
  {
    quote: 'Sounding like a professional in the Palm Beach Symphony',
    person: 'Professor Gabriel Beavers'
  },
  {
    quote: 'Impressed with [his] wonderful humanity, integrity and outlook on life…in [his] journey toward a bright and exciting future',
    person: 'Dr. Yoshiyuki Ishikawa'
  },
  {
    quote: 'Beautiful and committed playing…very soulful and passionate',
    person: 'Professor Christina Jennings'
  },
  {
    quote: 'So wonderful [his] desire to sing and create the tender contrasts…so much to admire',
    person: 'Dr. Daniel Silver'
  },
  {
    quote: 'Totally captivating from the first note…Clean and beautiful and colorful',
    person: 'Peter Cooper'
  },
  {
    quote: 'So proud to know [him], to have made music with [him]',
    person: 'Michelle Hynson'
  },
]

const fullBio = 'Bassoonist Ethan Shuler graduated from the University of Colorado-Boulder in May of 2020. At CU, Ethan studied music performance and computer science, graduating with highest honors. Ethan\'s bassoon teachers have included Andrew Jackson, Dr. Yoshi Ishikawa, and Gabriel Beavers. Mr. Shuler is also an active member of the International Double Reed Society, working on the film/livestreaming crew at the previous two US-based conferences, volunteering at the 2022 conference in Boulder, and performing at the 2022 conference. Ethan won first prize in the Australian Double Reed Society\'s 2020 bassoon competition with his performance of Carolyn Morris\'s "Bassoon Boogie" and of Franciso Mignone\'s Walzes. Ethan has participated in masterclasses with esteemed musicians such as Billy Short, Kathleen McLean, Anne Epperson, Steve Braunstein, and Andrea Cellacchi; beyond performing chamber music with friends and classmates, Ethan has collaborated on stage with musicians including Bill Douglas, Billy Short, and Yoshi Ishikawa. When he is not playing bassoon, you can find Ethan learning new programming skills, listening to jazz, or making reeds while rewatching Lord of the Rings.'

const shortBio = 'Bassoonist Ethan Shuler performs music as the ultimate form of self-expression. Having studied at the University of Colorado-Boulder and the University of Miami’s Frost School of Music, he performed in principal positions at both institutions’ most advanced ensembles. While at these institutions, Mr. Shuler studied with Yoshi Ishikawa and Gabirel Beavers, respectively. Ethan is currently finishing his master’s degree in bassoon performance and is an in-demand freelancer in the Miami area.'

const Quotes = styled.div`
  padding-top: 3em;
  text-align: center;

  div {
    padding-top: 2em;
    font-size: 1.1em;
  }
`

const Bio = styled.div`
  margin: 3em auto;
  width: 50%;
  line-height: 2em;
  text-align: center;
`

const DownloadLink = styled.div`
  text-align: center;
  padding-top: 3em;
  button {
    width: 10em;
    margin: 2em 0;
  }
`

const Epk = () => {
  return (
    <div>
      <DownloadLink>
        <a href={epk} rel='noopener noreferrer' target='_blank' >
          <Button trailingIcon="picture_as_pdf" label="Resume">Download EPK</Button>
        </a>
      </DownloadLink>
      <Quotes>
        {quotes.map((quote) => (
        <div>
          <p>"<em>{quote.quote}</em>"</p>
          <p><strong>-{quote.person}</strong></p>
        </div>
      ))}
      </Quotes>
      <Bio>
        <h2>Full Bio</h2>
        {fullBio}
      </Bio>
      
      <Bio>
        <h2>Short Bio</h2>
        {shortBio}
      </Bio>
      <Socials />
    </div>
  )
}

export default Epk