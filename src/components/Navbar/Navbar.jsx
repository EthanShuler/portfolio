import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../utils/Devices'

const NavContainer = styled.div`

`

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
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
  font-size: 1.5em;
  font-weight: 700;

  @media screen and ${device.tablet} {
    width: 100%;
    height: auto;
    position: relative;
    padding: 0;
    justify-content: center;
    flex-direction: column;
    display: none;

    ${({ active }) => active && `
      display: flex
      `}
  }
`

const LeftNav = styled.div`
`

const RightNav = styled.div`
@media screen and ${device.tablet} {
  display: flex;
  flex-direction: column;
}
`

const Hamburger = styled.div`
  display: none;
  @media screen and ${device.tablet} {
    display: block;
    cursor: pointer;
  }
`

const Bar = styled.span`
  display: block;
  width: 1.5625em;
  height: 0.1875em;
  margin: 0.3125em auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3 ease-in-out;
  background-color: #101010;
`

const NavLinkElement = styled(NavLink)`
  padding: 1em;

  &[class*="active"] {
    pointer-events: none;
    opacity: 50%;
  }
  @media screen and ${device.tablet} {
    text-align: center;
    float: none;
    padding: 0;
  }
`
const NavText = styled.p`
  display: inline-block;
  &:hover {
    color: #c24a10;
      border-bottom: 2px solid #c24a10;
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
  const [active, setActive] = useState(false)

  return (
    <NavContainer>
      <Hamburger onClick={() => setActive(!active)}>
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
      </Hamburger>

      <Navigation active={active} >
        <LeftNav>
          <HeaderLink page='' suppliedTitle='Ethan' />
        </LeftNav>
        <RightNav>
          <HeaderLink page='home' />
          <HeaderLink page='about' />
          <HeaderLink page='media' />
        </RightNav>
      </Navigation>

    </NavContainer>
  )
}

export default Navbar