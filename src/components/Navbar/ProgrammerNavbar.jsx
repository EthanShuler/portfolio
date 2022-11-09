import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../utils/Devices'
import logo from './logo.svg'
import { Navigation, Brand, NavigationMenu, NavText, Hamburger, Logo } from './navComponents'

const NavLinkElement = styled.a`
  margin: 0 1rem;

  &[class*="active"] {
    pointer-events: none;
    opacity: 50%;
  }

  @media screen and ${device.tablet} {
    text-align: center;
    margin: 0;
}
`

const HeaderLink = ({ section, setExpanded }) => {
  const title = section.charAt(0).toUpperCase() + section.slice(1)

  return (
    <NavLinkElement href={`#${section}`} onClick={() => setExpanded(false)}>
      <NavText>{title}</NavText>
    </NavLinkElement>
  )
}

const ProgrammerNavbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <Navigation expanded={isNavExpanded}>
      <Hamburger onClick={() => setIsNavExpanded(!isNavExpanded)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      </Hamburger>
      <Brand>
        <NavLink to='/'>
          <Logo src={logo} alt="logo"/>
        </NavLink>
      </Brand>
      <NavigationMenu expanded={isNavExpanded}>
        <HeaderLink section='home' setExpanded={setIsNavExpanded} />
        <HeaderLink section='experience' setExpanded={setIsNavExpanded} />
        <HeaderLink section='projects' setExpanded={setIsNavExpanded} />
        <HeaderLink section='education' setExpanded={setIsNavExpanded} />
        <HeaderLink section='contact' setExpanded={setIsNavExpanded} />
      </NavigationMenu>
    </Navigation>
  )
}

export default ProgrammerNavbar