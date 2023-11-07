import React from "react";
import "../styles/header.css";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

const Header = ({ handleChange, iconMode }) => {
  return (
    <div className="header-container">
      <div className="head-container">
        <h1>Where in the world?</h1>
        <div className="darkMode-container" onClick={handleChange}>
          {iconMode ? <BsMoonFill /> : <BsFillSunFill />}
          <span>Dark Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
