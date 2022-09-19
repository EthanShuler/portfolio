import React from 'react'
import About from './components/About/About';
import Home from './components/Home/Home';
import Media from './components/Media/Media'
import Landing from './components/Landing/Landing'
import Programmer from './components/Programmer/Programmer';
import Globals from './utils/GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Globals />
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='media' element={<Media />} />
          <Route path='programmer' element={<Programmer />} />
        </Routes>
      </Router>

    </div>

  )
}

export default App;
