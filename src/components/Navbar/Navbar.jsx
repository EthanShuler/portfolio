import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const HeaderLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1)


  return (
    <NavLink to={`/${page}`} className={({ isActive }) => isActive ? 'navlink navlink-active' : 'navlink'}>
      <p className="navText">{title}</p>
    </NavLink>
  )
}

const Navbar = () => {

  return (
    <nav>
      <HeaderLink page='home' />
      <HeaderLink page='about' />
      <HeaderLink page='media' />
      <button class="burger-menu" id="burger-menu">
        <ion-icon class="bars" name="menu-outline"></ion-icon>
      </button>
    </nav>
  )
}

export default Navbar