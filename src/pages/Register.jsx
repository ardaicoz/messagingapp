import React from 'react';
import "../style.scss";

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Messaging App</span>
                <span className='title'>Register</span>
                <form>
                    <input type="text" placeholder='display name'/>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <button>Sign Up</button>
                </form>
                <p>Already have an account? Login</p>
            </div>
        </div>
    )
}

export default Register;