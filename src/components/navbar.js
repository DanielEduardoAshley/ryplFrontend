import React from "react";
import logo from "../images/rypl.png";
import "./style/navbar.css";

const Navbar = props => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img className="navbar-logo" src={logo} alt="logo" />
        </div>
        <div className="navbar-right">
          <div className="nav-item">Sign Up</div>
          <div className="nav-item">Log In</div>
          <div className="nav-item">Sign Out</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
