import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>IM App</span>
      <div className='user'>
        <img src="https://upload.wikimedia.org/wikipedia/en/8/82/Lightning_McQueen.png" alt=""/>
        <span>McQueen</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar