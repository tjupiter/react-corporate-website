import React from 'react'
import Footer from '../sections/Footer'
import NavHome from '../elements/NavHome'
import { useLocation } from 'react-router-dom'

import './Welcome.css'


function Welcome() {

  const location = useLocation();

  return (
    <div className='welcome-container'>
    
      <NavHome />
      
      <div className='welcome-textbox'>
        <p><span>React Company Dummy Website</span> Leading Cloud Creator Company In The Western Hemisphere</p>
      </div>
      <Footer location={location} />
    </div>

  )
  }
export default Welcome