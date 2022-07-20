import React from 'react'
import './WwdTopCard.css'


function WwdTopCard(props) {
  return (
    <div 
      className='card-container' 
      style={{background: `url(${props.bgUrl})`, backgroundSize: "cover"}}
    >
      <div className='card-container-color' style={{ backgroundColor: props.bgColor }}>
        <h3 className='wwd-top-card-title'>{props.title}</h3>
        <p className='wwd-top-card-text'>{props.text}</p>
      </div>
    </div>
  )
}

export default WwdTopCard