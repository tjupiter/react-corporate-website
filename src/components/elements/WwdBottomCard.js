import React from 'react'
import './WwdBottomCard.css'

function WwdBottomCard(props) {
  return (
    <div className='wwd-bottom-single-card-container'>
      <h3 className='wwd-bottom-card-title'>{props.title}</h3>
      <p className='wwd-bottom-card-text'>{props.text}</p>
    </div>
  )
}

export default WwdBottomCard