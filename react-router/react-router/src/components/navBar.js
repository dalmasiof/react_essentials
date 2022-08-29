import React from 'react'

import './navBar.css'

import {Link} from 'react-router-dom'

const navBar = () => {
  return (
    <navBar className='nav'>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>

    </navBar>
  )
}

export default navBar