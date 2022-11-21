import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://upload.wikimedia.org/wikipedia/en/f/f7/Mater_%28Cars%29.png" alt=""/>
        <div className="userChatInfo">
          <span>Mater</span>
        </div>
      </div>
    </div>
  )
}

export default Search