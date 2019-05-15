import React from "react";
import { Link } from "react-router-dom";
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
          <Link
            to="/signup"
            className="nav-item"
            style={{ textDecoration: "none", color: "white" }}
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="nav-item"
            style={{ textDecoration: "none", color: "white" }}
          >
            Log In
          </Link>
          <Link
            to="/logout"
            className="nav-item"
            style={{ textDecoration: "none", color: "white" }}
          >
            Log Out
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
