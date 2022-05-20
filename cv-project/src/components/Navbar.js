import React from 'react'
import '../styles/NavBar.scss'

function Navbar() {
  return (
    <div className='navbar-background'>
      <div class="container">
        <ul>
          <li><a href="">CVBuilder</a></li>
          <li><a href="">Profile</a></li>
          <li><a href="">Build a CV</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar