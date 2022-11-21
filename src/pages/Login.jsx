import React from 'react';
import "../style.scss";

const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Messaging App</span>
                <span className='title'>Log In</span>
                <form>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <button>Log in</button>
                </form>
                <p>Don't have an account? Sign up</p>
            </div>
        </div>
    )
}

export default Login;