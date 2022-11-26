import React from 'react'
import { useState } from 'react'
import { collection, query, where, getDocs, setDoc, updateDoc, serverTimestamp, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { useContext } from 'react';

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const {currentUser} = useContext(AuthContext); 

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      }); 
    }
    catch(error) {
      setError(true);
    }
  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combineID = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    
    try {
      const res = await getDoc(doc(db, "chats", combineID));

      if(!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combineID), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combineID+".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combineID+".date"]: serverTimestamp()
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combineID+".userInfo"]: {
            uid: currentUser.uid,
            displayName:currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combineID+".date"]: serverTimestamp()
        });
      }
    }
    catch(error) {

    }
  };

  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)}/>
      </div>
      {error && <span>User not found</span>}
      {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt=""/>
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search