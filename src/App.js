import React from "react";
import firebase from "./firebase";
import "./App.css";
import { Route, HashRouter, Switch } from "react-router-dom";
import serviceWorker from "./services/services";

//Context
import AuthContext from "./contexts/auth";

//Pages
import Navbar from "./components/navbar";
import Login from "./containers/login";
import SignUp from "./containers/signup";
import Logout from "./components/logout";
import Home from "./containers/home";
import Video from "./components/video";
import SingleVideo from "./containers/singleVideoPage";
import VerticalMode from "./components/singleVideoLeft";
import Category from "./containers/category";
import VideoPage from "./containers/videoPage";
import Profile from "./components/profile";

class App extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    console.log(this.state, "state");
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("FIRED");
        const { uid } = user;
        serviceWorker
          .getUser(uid)
          .then(data => {
            console.log(data);
            this.setState({ user: data.data });
          })
          .catch(err => console.log(err));
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
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/video" exact component={Video} />
            {/* <Route path="/videopage" component={SingleVideo} /> */}
            <Route path="/category/:id" exact component={Category} />
            <Route path="/VideoPage/:id" exact component={VideoPage} />
            <Route path="/profile" exact component={Profile} />
          </Switch>
        </AuthContext.Provider>
      </HashRouter>
    );
  }
}

export default App;
