import React from 'react'
import './WwdTopCard.css'


function WwdTopCard(props) {
  return (
    <div 
      className='card-container' 
      style={{background: `url(${props.bgUrl})`, backgroundSize: "cover"}}
    >
      <div className='card-container-color' style={{ backgroundColor: props.bgColor }}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default WwdTopCard