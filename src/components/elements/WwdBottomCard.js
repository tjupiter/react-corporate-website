import React from 'react'
import './WwdBottomCard.css'

function WwdBottomCard(props) {
  return (
    <div className='wwd-bottom-single-card-container'>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default WwdBottomCard