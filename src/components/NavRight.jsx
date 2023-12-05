import React from 'react'
import '../styles/youtube/NavRight.css'

function NavRight() {
  return (
    <div className='nav-right'>
      <div className='user-logo'>
      <i class="fa-solid fa-ellipsis-vertical" id='three-dot'></i>

      <i class="fa-solid fa-circle-user"></i>
      <button className='sign-in'>Sign-In</button>
      </div>
     

    </div>
  )
}

export default NavRight