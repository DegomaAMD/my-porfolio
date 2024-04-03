import React from 'react'
import logo from '../assets/img/1.webp';

function Footer() {
  return (
    <div className='footer'>
        <img src={logo} alt='Website Logo' aria-label='Website Logo' width={30} />
        <p>© 2024 by Andria Mae Degoma</p>

    </div>
  )
}

export default Footer