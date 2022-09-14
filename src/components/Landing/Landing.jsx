import React, { useState } from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  const [active, setActive] = useState('')

  return (
      <div className={"split-container" + active}>
        <Link to="/home">
          <div className='split left'
            onMouseEnter={() => setActive(' hover-left')} onMouseLeave={() => setActive('')}>
            <h1>Musician</h1>
          </div>
        </Link>
        <Link to="/programmer">
          <div className='split right'
            onMouseEnter={() => setActive(' hover-right')} onMouseLeave={() => setActive('')}>
            <h1>Programmer</h1>
          </div>
        </Link>
      </div>
  )
}

export default Landing;