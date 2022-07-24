import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Nav.css'

function NavMobile() {

  const [isOpen, setIsOpen] = useState('false');

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }

  const { width } = useWindowDimensions();


  // classnames
  // how to extract jsx expression from inline style into variables for easier maintanence ?


  return (
    <nav className={`nav ${isOpen ? '' : 'white-bg'}`}>
      {/* MOBILE DROPDOWN MENU*/}
      {width < 768 && 
        <div className={`mobile-sidemenu ${isOpen ? '' : 'visible'}`}>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (`nav-mobile-sidemenu-links ${isOpen ? '' : 'visible '}`) + (isActive ? "active-link-white" : "")}
            >About Us</NavLink>
          <NavLink 
            to="/what-we-do" 
            className={({ isActive }) => (`nav-mobile-sidemenu-links ${isOpen ? '' : 'visible '}`) + (isActive ? "active-link-white" : "")}
            >What We Do</NavLink>
          <NavLink 
            to="/team" 
            className={({ isActive }) => (`nav-mobile-sidemenu-links ${isOpen ? '' : 'visible '}`) + (isActive ? "active-link-white" : "")}
            >Team</NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (`nav-mobile-sidemenu-links ${isOpen ? '' : 'visible '}`) + (isActive ? "active-link-white" : "")}
            >Contact</NavLink>
        </div>
      }

      {/* MENU BAR */}
      <div className={`container nav-elements-container ${isOpen ? '' : 'white-bg'}`}>
        <Link to="/" className='nav-mobile-logo'>RCW</Link>

        {width < 768 && 
          <div className={`nav-mobile-hamburger-container ${isOpen ? '' : 'open'}`} onClick={handleToggle}>
              <span className='hamburger-rod'></span>
              <span className='hamburger-rod'></span>
              <span className='hamburger-rod'></span>
          </div>
        }

        {width > 768 && <div className='nav-link-container flex'>
          {/* <Link to="/" className='nav-links'>Home</Link>  */}
          <NavLink to="/about" className={({ isActive }) => "nav-links " + (isActive ? "active-link-black" : "")}>About Us</NavLink>
          <NavLink to="/what-we-do" className={({ isActive }) => "nav-links " + (isActive ? "active-link-black" : "")}>What We Do</NavLink>
          <NavLink to="/team" className={({ isActive }) => "nav-links " + (isActive ? "active-link-black" : "")}>Team</NavLink>
          <NavLink to="/contact" className={({ isActive }) => "nav-links " + (isActive ? "active-link-black" : "")}>Contact</NavLink>
        </div>}
      </div>
    </nav>
  )
}

export default NavMobile