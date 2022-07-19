import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config'


function Navbar(props) {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className='navbar-background'>
      <div className="container">
        <ul>
          <li><a href="/">Home</a></li>
          {props.user ? <li><a href="/profile">Profile</a></li> : <li><a href="/register">Sign Up</a></li>}
          {props.user ? <li><a href="/cvbuilder">CVBuilder</a></li> : <li><a href="/login">Login</a></li>}
          {props.user && <li><a href="/" onClick={logout}>Sign Out</a></li>}
        </ul>
      </div>
    </div>
  )
}

export default Navbar