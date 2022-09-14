import React from 'react'
import './Home.css'
import headshot from './headshot.png'
import Navbar from '../Navbar/Navbar'

const Hero = () => {
  return (
    <div>
      <Navbar />
      <section className="hero container" id="hero">
        <img src={headshot} alt="Headshot" className="hero-img" />
        <div className="title">
          <h1>Ethan Shuler</h1>
          <h2>Bassoonist</h2>
        </div>
      </section>
    </div>

  )
}

export default Hero