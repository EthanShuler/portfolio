import React from 'react'
import './Media.css'
import Navbar from '../Navbar/Navbar'

const YoutubeEmbed = ({ title, embedId, description, date }) => {
  return (
    <div className="video-responsive">
      <h3>{title}</h3>
      <iframe
        src={`https://youtube.com/embed/${embedId}`}
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen title="Embedded Youtube" />
      <p>{description}</p>
      <p className='date'>{date}</p>
    </div>
  )
}

const Media = () => {
  return (
    <div>
      <Navbar />
      <section className="container" id="media">
        <div className="listen">
          <h1>Listen</h1>
          <div className="videos">
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default Media