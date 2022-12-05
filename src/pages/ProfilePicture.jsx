import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { db, storage } from '../firebase';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const ProfilePicture = () => {
  const { currentUser } = useContext(AuthContext);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    const displayName = currentUser.displayName;
    const email = currentUser.email;
    e.preventDefault();
    const file = e.target[0].files[0];

    try {
      const date = new Date().getTime();
      const storageRef = ref(storage, `${currentUser.displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(currentUser, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", currentUser.uid), {
              uid: currentUser.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })
          }
          catch (error) {
            setError(true);
          }
        });
      });
    }
    catch (error) {
      setError(true);
    }
  }
  
  return (
    <div className="formContainer">
        <div className="formWrapper">
          <span className='title'>Upload photo</span>
          <form onSubmit={handleSubmit}>
            <input type="file" id="file"/>
            <button>Upload</button>
            {error && <span>Something went wrong</span>}
          </form>
        </div>
    </div>
  )
}

export default ProfilePicture;
