import React from "react";
import firebase from "../firebase";

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
    return (
      <>
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
              <button class="submit-btn" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
