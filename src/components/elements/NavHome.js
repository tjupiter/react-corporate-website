import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './NavHome.css';

function NavHome() {

  const [isOpen, setIsOpen] = useState('false');

  function handleToggle() {
    setIsOpen(!isOpen)
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

  return (

    <nav className='nav-home'>
      {width < 768 &&
        <div className={`mobile-sidemenu ${isOpen ? '' : 'visible'}`}>
          <Link 
            to="/about" className={`nav-home-sidemenu-links ${isOpen ? '' : 'visible'}`}>About Us</Link>
          <Link to="/what-we-do" className={`nav-home-sidemenu-links ${isOpen ? '' : 'visible'}`}>What We Do</Link>
          <Link to="/team" className={`nav-home-sidemenu-links ${isOpen ? '' : 'visible'}`}>Team</Link>
          <Link to="/contact" className={`nav-home-sidemenu-links ${isOpen ? '' : 'visible'}`}>Contact</Link>
        </div>
      }
      <div className={`container nav-home-elements-container ${isOpen ? '' : 'nav-bar-visible'}`}>
        <div className={`welcome-mobile-logo ${isOpen ? '' : 'black-font'}`} >RCW</div>
        {width < 768 &&
          <>
            <div className={`nav-home-mobile-hamburger-container ${isOpen ? '' : 'open'}`} onClick={handleToggle}>
              <span className='nav-home-mobile-hamburger-rod'></span>
              <span className='nav-home-mobile-hamburger-rod'></span>
              <span className='nav-home-mobile-hamburger-rod'></span>
            </div>

          </>
        }

        {width > 768 && <div className='nav-home-link-container flex'>
          {/* <Link to="/" className='nav-links'>Home</Link>  */}
          <Link to="/about" className='nav-home-links'>About Us</Link>
          <Link to="/what-we-do" className='nav-home-links'>What We Do</Link>
          <Link to="/team" className='nav-home-links'>Team</Link>
          <Link to="/contact" className='nav-home-links'>Contact</Link>
        </div>}
      </div>
    </nav>
  )
}

export default NavHome