import React from "react";
import firebase from "../firebase";
import axios from "axios";
import AuthContext from "../contexts/auth";
import { Redirect } from "react-router-dom";
import serviceWorker from "../services/services";

import "./style/signup.css";

class SignUp extends React.Component {
  state = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    userUID: "",
    signUp: false,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password, username, firstname, lastname } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        let userUID = res.user.uid;
        return serviceWorker
          .postUser(username, email, userUID, firstname, lastname, "null")
          .then(data => 
            this.setState({
              signUp : true,
            })
          
          );
      })
      .catch(err => {
        alert(err);
        return;
      });
  };

  // if doing profile imag, handleFileInput = (e) => {};

  render() {
    const { username, firstname, lastname, email, password, signUp } = this.state;
    return (
      signUp ? <Redirect to="/" /> : 
      <>
        <AuthContext.Consumer>
          {user => {
            if (user) {
              return <Redirect to="/" />;
            } else {
              return (
                <div className="entire-view">
                  <div className="signup-left">
                    <div className="header-big">RYPL</div>
                    <div classname="description">
                      A new way to express yourself through videos.
                    </div>
                  </div>
                  <div className="form">
                    <div className="form-header">SIGN UP</div>
                    <div className="input-fields">
                      <input
                        className="input-i"
                        type="name"
                        placeholder="Username"
                        required
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                      />
                      <div className="two-input-fields">
                        <input
                          className="input"
                          type="name"
                          placeholder="First name"
                          required
                          name="firstname"
                          value={firstname}
                          onChange={this.handleChange}
                        />
                        <input
                          className="input"
                          type="name"
                          placeholder="Last name"
                          required
                          name="lastname"
                          value={lastname}
                          onChange={this.handleChange}
                        />
                      </div>
                      <input
                        className="input-i"
                        type="email"
                        placeholder="Email"
                        required
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                      />
                      <input
                        className="input-i"
                        type="password"
                        placeholder="Password"
                        required
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="center">
                      <button class="submit-btn" onClick={this.handleSubmit}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          }}
        </AuthContext.Consumer>
      </>
    );
  }
}

export default SignUp;
