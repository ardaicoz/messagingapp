import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Gigachat from "../img/gigachat.jpeg";

import "../style.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="navBar">
        <img style={{height:60}} src={Gigachat}/>
        <Navbar />
      </div>
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
