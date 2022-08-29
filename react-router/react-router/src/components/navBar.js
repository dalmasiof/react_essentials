import React from 'react'

import './navBar.css'

import {Link, NavLink} from 'react-router-dom'

const navBar = () => {
  return (
    <nav className='nav'>
      <NavLink to="/about" >About</NavLink>
      <NavLink to="/home" >Home</NavLink>
      <NavLink to="/product/2">Product</NavLink>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product/2">Product</Link> */}
    </nav>
  )
}

export default navBar