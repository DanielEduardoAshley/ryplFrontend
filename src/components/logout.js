import React from "react";
import firebase from "../firebase";

import "./style/logout.css";

class Logout extends React.Component {
  componentDidMount() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <>
        <div className="logout-pg">Make sure to come back for more videos!</div>
      </>
    );
  }
}

export default Logout;
