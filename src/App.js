import React from "react";
import firebase from "./firebase";
import "./App.css";
import { Route, HashRouter, Switch } from "react-router-dom";

//Context
import AuthContext from "./contexts/auth";

//Pages
import Navbar from "./components/navbar";
import Login from "./containers/login";
import SignUp from "./containers/signup";
import Logout from "./components/logout";
import Home from "./containers/home";

class App extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    console.log(this.state, "state");
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: {
            uid: user.uid,
            email: user.email
          }
        });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <HashRouter>
        <AuthContext.Provider value={this.state.user}>
          <Route path="/" component={Navbar} />
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/" exact component={Home} />
          </Switch>
        </AuthContext.Provider>
      </HashRouter>
    );
  }
}

export default App;
