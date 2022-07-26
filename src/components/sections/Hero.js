import React from 'react'
import Nav from '../elements/Nav'
import './Hero.css'

function Hero(props) {

  // console.log(props.heroImgSrc)
  return (
    <header>
      <img className='hero-image' src={props.heroImgSrc} alt="" />
      <Nav />
      {props.title && 
        <h2 className='hero-title'>{props.title}</h2>
      }
    </header>
  )
}

export default Hero