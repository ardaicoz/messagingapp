import React, { useState } from "react";
import "../style.scss";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import Gigachat from "../img/gigachat.jpeg";

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, {
        displayName,
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/instantmessaging-fd7e4.appspot.com/o/default.jpg?alt=media&token=36a0824d-2577-4b21-aff3-445c55a0bca2",
      });

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/instantmessaging-fd7e4.appspot.com/o/default.jpg?alt=media&token=36a0824d-2577-4b21-aff3-445c55a0bca2",
      });

      await setDoc(doc(db, "userChats", res.user.uid), {});
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="navBar">
        <img style={{height:60}} src={Gigachat}/>
      </div>
      <div className="formWrapper">
        <span className="title">Register to GigaChat</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="E-Mail" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
          {error && <span>Something went wrong</span>}
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
