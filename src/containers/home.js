import React from "react";
import firebase from "../firebase";
import "./style/home.css";
import SideNavBar from "../components/sideNavBar";

//components
import Carousel from "../components/carousel";
import Category from "../components/rotatingCategory";

class Home extends React.Component {
  state = {};

  componentDidMount() {}
  render() {
    return (
      <>
        <div className="entire-page">
          {/* <SideNavBar /> */}
          <div className="carousel-wrapper">
            <div className="trending">Popular Videos</div>
            <Carousel />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
