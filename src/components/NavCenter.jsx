import React from 'react'
import '../styles/youtube/NavCenter.css'

function NavCenter() {
  return (
    <div className='nav-center'>
      <div className='search'><input className='search-box' type="search" placeholder='Search' />
      <i class="fa-solid fa-magnifying-glass" id='search'></i>
      </div>
     
     <div className='microphone'> <i class="fa-solid fa-microphone"></i></div>
    </div>
  )
}


export default NavCenter