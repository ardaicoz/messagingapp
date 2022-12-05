import React, {useCallback} from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate} from "react-router-dom";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate('/profilepicture', {replace:true}), [navigate]);

  return (
    <div className="navbar">
      <div className="user">
        <img src={currentUser.photoURL} alt="" onClick={handleClick}/>
        <span className="username">{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
