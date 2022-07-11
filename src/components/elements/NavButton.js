import React from 'react'
import { Link } from 'react-router-dom'

function NavButton(props) {
  return (
    <Link to={props.to}>{props.linkName} </Link>
  )
}

export default NavButton