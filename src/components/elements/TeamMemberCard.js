import React from 'react'
import './TeamMemberCard.css'

function TeamMemberCard(props) {
  let telTo = `tel:${props.tel}`
  let mailTo = `mailto:${props.email}`
  return (
    <div className='team-member-card-container' style={{background:`url(${props.img})`, backgroundSize: "cover"}}>
      <div className='team-member-info'>
        <h3>{props.name}</h3>
        <a href={telTo} title={props.tel}>{props.telDisplay}</a>
        <a href={mailTo} title={props.email}>{props.email}</a>
        <div className='team-country-info'>{props.country}</div>
      </div>
    </div>
  )
}

export default TeamMemberCard