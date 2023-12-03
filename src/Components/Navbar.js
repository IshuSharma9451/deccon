//Navbar.js
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left-nav'>
        <h1>Dictionary App</h1>
      </div>
      <div className='right-nav'>
        <Link to='/'>Home</Link>
        <Link to='/history'>History</Link>
      </div>
    </div>
  )
}

export default Navbar
