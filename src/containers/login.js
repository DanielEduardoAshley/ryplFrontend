import React from "react";
import firebase from "../firebase";
import AuthContext from "../contexts/auth";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log("login success", res);
      })
      .catch(error => {
        const { message } = error;
        this.setState({ error: message });
      });
  };

  render() {
    const { email, password, error } = this.state;
    const displayerror =
      error === "" ? "" : <div className="error-msg">{error}</div>;
    return (
      <>
        <AuthContext.Consumer>
          {user => {
            if (user) {
              return <Redirect to="/" />;
            } else {
              return (
                <div>
                  <div
                    className="error-msg"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "50px",
                      padding: "10px",
                      color: "#f46b3d",
                      textAlign: "center",
                      fontSize: "24px"
                    }}
                  >
                    {displayerror}
                  </div>
                  <div
                    className="entire-view"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div className="form">
                      <div className="form-header">LOG IN</div>
                      <div className="input-fields">
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
                        <button
                          className="submit-btn"
                          onClick={this.handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
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

export default Login;
