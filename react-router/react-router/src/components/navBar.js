import React from 'react'

import './navBar.css'

import {Link} from 'react-router-dom'

const navBar = () => {
  return (
    <nav className='nav'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product/2">Product</Link>
    </nav>
  )
}

export default navBar