import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/rypl.png";
import "./style/navbar.css";
import AuthContext from "../contexts/auth";

const Navbar = props => {
  return (
    <>
      <AuthContext.Consumer>
        {user => {
          if (user) {
            return (
              <>
                <div className="navbar">
                  <div className="navbar-left">
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <img className="navbar-logo" src={logo} alt="logo" />
                    </Link>
                  </div>
                  <div className="navbar-right">
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
          } else {
            return (
              <div className="navbar">
                <div className="navbar-left">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <img className="navbar-logo" src={logo} alt="logo" />
                  </Link>
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
                </div>
              </div>
            );
          }
        }}
      </AuthContext.Consumer>
    </>
  );
};

export default Navbar;
