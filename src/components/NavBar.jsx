import React from 'react'
import NavLeft from './NavLeft'
import NavCenter from './NavCenter'
import NavRight from './NavRight'
import '../styles/NavBar.css'


function NavBar() {
  return (
 <div className='nav-container'>
  <NavLeft/>
  <NavCenter/>
  <NavRight/>
  
  </div>
  )
}

export default NavBar