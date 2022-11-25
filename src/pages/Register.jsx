import React, { useState } from 'react';
import "../style.scss";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom';

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
                photoURL: "https://firebasestorage.googleapis.com/v0/b/instantmessaging-fd7e4.appspot.com/o/default.png?alt=media&token=8ecfa9b5-95d2-4681-9d3b-f6e166369369",
            });
            
            await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: "https://firebasestorage.googleapis.com/v0/b/instantmessaging-fd7e4.appspot.com/o/default.png?alt=media&token=8ecfa9b5-95d2-4681-9d3b-f6e166369369",
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
        }
        catch(error) {
            setError(true);
        }
    }

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Messaging App</span>
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='display name'/>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <button>Sign Up</button>
                    {error && <span>Something went wrong</span>}
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register;