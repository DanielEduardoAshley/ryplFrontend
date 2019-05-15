import React from "react";
import "./App.css";
import { Route, HashRouter, Switch } from "react-router-dom";

//Pages
import Navbar from "./components/navbar";
import Login from "./containers/login";
import SignUp from "./containers/signup";

function App() {
  const arr = [1, 2, 3, 4];
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
  }

  return (
    <HashRouter>
      <Route path="/" component={Navbar} />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </HashRouter>
  );
}

export default App;
