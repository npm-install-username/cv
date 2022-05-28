import React from 'react'


function Navbar() {
  return (
    <div className='navbar-background'>
      <div className="container">
        <ul>
          <li><a href="/">CVBuilder</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/cvbuilder">Build a CV</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar