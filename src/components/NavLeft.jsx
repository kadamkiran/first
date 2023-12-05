import React from 'react'
import '../styles/youtube/NavLeft.css'

function NavLeft() {
  return (
    <div className='div-left-container'>
      <div className='menu-bar'>
        <i class="fa-solid fa-bars"></i>
      </div>

      <div className='youtube-logo'>
       <span className='youtube-icon'>
         <i class="fa-brands fa-youtube"></i></span>

        <span className='logo-text'><b>YouTube</b></span>
      </div>
    </div>
  )
}

export default NavLeft