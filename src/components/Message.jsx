import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext';

const Message = ({messages}) => {
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://upload.wikimedia.org/wikipedia/en/f/f7/Mater_%28Cars%29.png" alt=""/>
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://upload.wikimedia.org/wikipedia/en/f/f7/Mater_%28Cars%29.png" alt=""/>
      </div>
    </div>
  )
}

export default Message