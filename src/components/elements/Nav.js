import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';
// import NavButton from './NavButton'

function Nav() {

  return (
    <nav>
      <div className='container nav-elements-container'>
        <div className='nav-logo'>
          RCW
        </div>
        <div className='nav-link-container flex'>

          
          <Link to="/" className='nav-links'>Home</Link> 
          <Link to="about" className='nav-links'>About Us</Link>
          <Link to="what-we-do" className='nav-links'>What We Do</Link>
          <Link to="team" className='nav-links'>Team</Link>
          <Link to="form" className='nav-links'>Form</Link>
          <Link to="contact" className='nav-links'>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav