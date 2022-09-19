import React from 'react'
import Navbar from '../Navbar/Navbar'
import styled from 'styled-components'
import { device } from '../../utils/Devices'

const Listen = styled.section`
  padding-left: 12.5em;
  padding-top: 4em;
  padding-bottom: 4em;

  h1 {
    padding: 3em 0;
  }

  @media screen and ${device.tablet} {
    justify-content: center;
    padding-left: 0;
    h1 {
      padding: 0;
      text-align: center;
    }
  }
`

const Videos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
`

const VideoResponsive = styled.div`
  transition: all .2s ease-in-out;
  width: 16em;
  border: .18em solid black;
  padding: 1em 0;
  margin: 1em 0;

  iframe {
    width: 100%;
  }

  &:hover {
    transform: scale(1.2);
  }
`

const Date = styled.p`
  opacity: 50%;
  font-size: small;
`

const YoutubeEmbed = ({ title, embedId, description, date }) => {
  return (
    <VideoResponsive>
      <h3>{title}</h3>
      <iframe
        src={`https://youtube.com/embed/${embedId}`}
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen title="Embedded Youtube" />
      <p>{description}</p>
      <Date>{date}</Date>
    </VideoResponsive>
  )
}

const Media = () => {
  return (
    <div>
      <Navbar />
      <Listen id="media">
          <h1>Listen</h1>
          <Videos>
            <YoutubeEmbed
              title="Poulenc Trio"
              embedId="VJyt66S_blg"
              description="Performed with Curtis Sellers (oboe) and Sarah Thune (piano) at CU-Boulder"
              date="2020"
            />
            <YoutubeEmbed
              title="Hummel Concerto"
              embedId="b9rYzbNitpo"
              description="Recorded with Ellen Shuler (piano)"
              date="2020"
            />
            <YoutubeEmbed
              title="Pure Imagination"
              embedId="4gi7Dj0sFCI"
              description="My own arrangement of Bricusse and Newley's song &quot;Pure Imagination.&quot; All parts recorded by me in my apartment. "
              date="2020"
            />
            <YoutubeEmbed
              title="Pure Imagination"
              embedId="4gi7Dj0sFCI"
              description="My own arrangement of Bricusse and Newley's song &quot;Pure Imagination.&quot; All parts recorded by me in my apartment. "
              date="2020"
            />
            <YoutubeEmbed
              title="Pure Imagination"
              embedId="4gi7Dj0sFCI"
              description="My own arrangement of Bricusse and Newley's song &quot;Pure Imagination.&quot; All parts recorded by me in my apartment. "
              date="2020"
            />
            <YoutubeEmbed
              title="Pure Imagination"
              embedId="4gi7Dj0sFCI"
              description="My own arrangement of Bricusse and Newley's song &quot;Pure Imagination.&quot; All parts recorded by me in my apartment. "
              date="2020"
            />
          </Videos>
      </Listen>
    </div>
  )
}

export default Media