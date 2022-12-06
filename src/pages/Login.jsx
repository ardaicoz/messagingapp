import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Gigachat from "../img/gigachat.jpeg";
import "../style.scss";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
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
        <span className="title">Login to GigaChat</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="E-Mail" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          {error && (
            <span className="error">
              Something went wrong, please try again.
            </span>
          )}
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
