import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../utils/Devices'

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;

  position: relative;
  height: 4.5em;
  width: 100%;
  padding: 1em 1em;
  align-items: center;
  font-size: 1.5em;
  font-weight: 700;

  z-index: 1000;
  }
`

const Brand = styled.div`
  margin-left: 1rem;
`

const NavigationMenu = styled.div`
  margin-left: auto;
  display: flex;
  padding: 0;
  gap: 2em;

  @media screen and ${device.tablet} {
    flex-direction: column;
    position: absolute;
    top: 3.75em;
    right: 0;

    height: calc(100vh - 4.8125rem);
    width: 100%;
    background-color: #fff;

    display: ${({ expanded }) => (expanded ? 'block' : 'none')};
  }
`

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
const NavText = styled.p`
  display: block;
  &:hover {
    color: #c24a10;
    border-bottom: 2px solid #c24a10;
  }

  @media screen and ${device.tablet} {
    padding: 1.5rem 0;
    width: 100%;

    &:hover {
      border-bottom: 0;
      background-color: #eee;
    }
  }
`

const Hamburger = styled.button`
  border: 0;
  height: 2.5em;
  width: 2.5em;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #c24a10;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  color: #fff;

  position: absolute;
  top: 50%;
  right: 1.5625em;
  transform: translateY(-50%);

  display: none;

  &:hover {
    background-color: #612508;
  }

  @media screen and ${device.tablet} {
    display: block;
  }
`

const HeaderLink = ({ page, suppliedTitle }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1)


  return (
    <NavLinkElement to={`/${page}`}>
      <NavText>{suppliedTitle ? suppliedTitle : title}</NavText>
    </NavLinkElement>
  )
}

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <Navigation>
      <Hamburger onClick={() => setIsNavExpanded(!isNavExpanded)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      </Hamburger>
      <Brand>
        <NavLink to='/'> Ethan </NavLink>
      </Brand>
      <NavigationMenu expanded={isNavExpanded}>
        <HeaderLink page='home' />
        <HeaderLink page='about' />
        <HeaderLink page='media' />
        <HeaderLink page='resume' />
      </NavigationMenu>
    </Navigation>
  )
}

export default Navbar