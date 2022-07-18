import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className='footer-inner-container container'>
        <div>RCW &copy; {new Date().getFullYear()} </div>
        <div className='footer-link-container'> 
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer