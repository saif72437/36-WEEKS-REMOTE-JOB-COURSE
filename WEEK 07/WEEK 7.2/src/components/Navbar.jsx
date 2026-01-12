import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() { 
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <hr />
    </div>
  )
}

export default Navbar
