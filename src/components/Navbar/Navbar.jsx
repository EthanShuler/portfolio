import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import instagramIcon from './instagram.svg'
import facebookIcon from './facebook.svg'
import youtubeIcon from './youtube.svg'
import { device } from '../../utils/Devices'

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;

    margin: 0;
    width: 12.5em;
    position: fixed;
    height: 100%;
    overflow: auto;

    padding: 2em;
    font-size: 1.5em;
    gap: 1.9rem;

    font-weight: 700;
    color: #000000;

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

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const Icon = styled.img`
  height: 1em;
  padding: 0 0.2em;
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
    <div>
      <Hamburger onClick={() => setActive(!active)}>
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
      </Hamburger>
      <Navigation active={active} className={active ? 'active' : ''}>
        <HeaderLink page='' suppliedTitle='Ethan' />
        <HeaderLink page='home' />
        <HeaderLink page='about' />
        <HeaderLink page='media' />
        <SocialMedia>
          <a href='https://www.instagram.com/ethanshuler/' target='_blank' rel='noreferrer'><Icon src={instagramIcon} alt='instagram' /></a>
          <a href='https://www.facebook.com/ethan.shuler.1/' target='_blank' rel='noreferrer'><Icon src={facebookIcon} alt='instagram' /></a>
          <a href='https://www.youtube.com/channel/UC5I4pf2EFAYsSP-TbGwatgg' target='_blank' rel='noreferrer'><Icon src={youtubeIcon} alt='instagram' /></a>
        </SocialMedia>
      </Navigation>
    </div>

  )
}

export default Navbar