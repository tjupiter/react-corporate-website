import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './NavMobile.css'

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



  return (
    
    <nav>
      {width < 600 && 
        <div className={`mobile-sidemenu ${isOpen ? '' : 'visible'}`}>
          <Link to="/about" className='nav-sidemenu-links'>About Us</Link>
          <Link to="/what-we-do" className='nav-sidemenu-links'>What We Do</Link>
          <Link to="/team" className='nav-sidemenu-links'>Team</Link>
          <Link to="/contact" className='nav-sidemenu-links'>Contact</Link>
        </div>
      }
      <div className={`container nav-elements-container ${isOpen ? '' : 'white-bg'}`}>
        <Link to="/" className='nav-mobile-logo'>RCW</Link>
        {width < 600 && 
          <>
          <div className={`nav-mobile-hamburger-container ${isOpen ? '' : 'open'}`} onClick={handleToggle}>
              <span className='hamburger-rod'></span>
              <span className='hamburger-rod'></span>
              <span className='hamburger-rod'></span>
            </div>
          
          </>
        }


        {width > 600 && <div className='nav-link-container flex'>
          {/* <Link to="/" className='nav-links'>Home</Link>  */}
          <Link to="/about" className='nav-links'>About Us</Link>
          <Link to="/what-we-do" className='nav-links'>What We Do</Link>
          <Link to="/team" className='nav-links'>Team</Link>
          <Link to="/contact" className='nav-links'>Contact</Link>
        </div>}
      </div>
    </nav>
  )
}

export default NavMobile