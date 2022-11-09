import React from 'react'
import styled from 'styled-components'
import { device } from '../../utils/Devices'
import images from './images'
import PhotoGallery from './PhotoGallery'

const videos = [
  {
    title: 'Poulenc Trio',
    embedId: 'VJyt66S_blg',
    description: 'Performed with Curtis Sellers (oboe) and Sarah Thune (piano) at CU-Boulder',
    date: '2020'
  },
  {
    title: 'Hummel Concerto',
    embedId: 'b9rYzbNitpo',
    description: 'Recorded with Ellen Shuler (piano)',
    date: '2020'
  },
  {
    title: 'Pure Imagination',
    embedId: '4gi7Dj0sFCI',
    description: 'My own arrangement of Bricusse and Newley\'s song "Pure Imagination." All parts recorded by me in my apartment. ',
    date: '2020'
  }
]

const Container = styled.section`
  padding: 4em;

  h1 {
    padding: 3em 0;
    text-align: center;
  }

  p {
    text-align: center;
  }

  @media screen and ${device.tablet} {
    margin: 0 auto;
    justify-content: center;
    h1 {
      padding: 0;
    }
  }
`

const Videos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
`

const VideoResponsive = styled.div`
  transition: all .2s ease-in-out;
  width: 24rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  border-radius: 0.625em;
  padding: 2em;
  margin: 1em 0;

  h3 {
    text-align: center;
    margin-bottom: 1em;
  }

  span {
    opacity: 50%;
    font-size: small;
  }

  iframe {
    width: 100%;
    height: 12rem;
  }

  &:hover {
    transform: scale(1.2);
  }
`

const YoutubeEmbed = ({ title, embedId, description, date }) => {
  return (
    <VideoResponsive>
      <h3>{title}</h3>
      <iframe
        src={`https://youtube.com/embed/${embedId}`}
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen title="Embedded Youtube" />
      <span>{date}</span>
    </VideoResponsive>
  )
}

const Media = () => {
  return (
    <Container>
      <h1>Watch & Listen</h1>
      <Videos>
        {videos.map((video, index) => (
          <YoutubeEmbed key={index} {...video} />
        ))}
      </Videos>
      <h1>Look</h1>
      <p>Click/Tap image to view full size image and a description</p>
      <PhotoGallery images={images} />
    </Container>
  )
}

export default Media