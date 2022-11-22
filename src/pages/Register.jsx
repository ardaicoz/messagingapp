import React, { useState } from 'react';
import "../style.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
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
                <p>Already have an account? Login</p>
            </div>
        </div>
    )
}

export default Register;