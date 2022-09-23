import React from 'react'
import About from './components/About/About';
import Home from './components/Home/Home';
import Media from './components/Media/Media'
import Landing from './components/Landing/Landing'
import Programmer from './components/Programmer/Programmer';
import Globals from './utils/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

const Musician = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const WithoutNav = () => <Outlet />

const App = () => {
  return (
    <div>
      <Globals />
      <Router>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<Landing />} />
            <Route path='/programmer' element={<Programmer />} />
          </Route>
          <Route element={<Musician />}>
            <Route path='/home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='media' element={<Media />} />
          </Route>
          
          
        </Routes>
      </Router>

    </div>

  )
}

export default App;
