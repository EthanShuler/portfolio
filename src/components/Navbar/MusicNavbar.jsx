import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../utils/Devices'
import logo from './logo.svg'
import { Navigation, Brand, NavigationMenu, NavText, Hamburger, Logo } from './navComponents'

const NavLinkElement = styled(NavLink)`
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

const HeaderLink = ({ page, setExpanded }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1)


  return (
    <NavLinkElement to={`/${page}`} onClick={() => setExpanded(false)}>
      <NavText>{title}</NavText>
    </NavLinkElement>
  )
}

const MusicNavbar = () => {
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
        <HeaderLink page='home' setExpanded={setIsNavExpanded} />
        <HeaderLink page='about' setExpanded={setIsNavExpanded} />
        <HeaderLink page='media' setExpanded={setIsNavExpanded} />
      </NavigationMenu>
    </Navigation>
  )
}

export default MusicNavbar