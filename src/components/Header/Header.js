import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='Header'>

      <Link to='/' style={{textDecoration:'none',color:'black'}}>
        <h1>Ecart</h1>
      </Link>
      
      <Link to='/logout'>
        <button className='logout' >Logout</button>
      </Link>
      
    </header>
  )
}

export default Header