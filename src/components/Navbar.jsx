import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>IM App</span>
      <div className='user'>
        <img src="https://upload.wikimedia.org/wikipedia/en/8/82/Lightning_McQueen.png" alt=""/>
        <span>McQueen</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar