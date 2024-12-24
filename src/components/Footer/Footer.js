import React from 'react'
import './Footer.css'

function footer() {
  return (
    <footer className='footer'>
        &copy; Ecart {new Date().getFullYear()}
    </footer>
  )
}

export default footer