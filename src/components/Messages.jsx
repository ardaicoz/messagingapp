import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { db } from '../firebase';
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatID), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => {
      unsub()
    }
  }, [data.chatID])

  return (
    <div className="messages">
      {messages.map((msg) => {
        <Message message={msg} key={msg.id}/>
      })}
    </div>
  )
}

export default Messages