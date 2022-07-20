import React from 'react'
import { Link } from 'react-router-dom'
import './NavHome.css';
// import NavButton from './NavButton'

function NavHome() {

  return (
    <nav className='nav-home'>
      <div className='container nav-home-elements-container'>
        <div className='welcome-logo'>RCW</div>
        <div className='nav-home-link-container flex'>
          <Link to="/about" className='nav-home-links'>About Us</Link>
          <Link to="/what-we-do" className='nav-home-links'>What We Do</Link>
          <Link to="/team" className='nav-home-links'>Team</Link>
          <Link to="/contact" className='nav-home-links'>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavHome