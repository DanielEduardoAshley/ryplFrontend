import React from "react";
import firebase from "../firebase";
import "./style/home.css";

//components
import Carousel from "../components/carousel";
import Category from "../components/category";

class Home extends React.Component {
  state = {};

  componentDidMount() {}
  render() {
    return (
      <>
        <div className="entire-page">
          <div className="carousel-wrapper">
            <div className="trending">Popular Videos</div>
            <Carousel />
          </div>
          <div className="cateogry-wrapper">
            <div className="category">Popular Categories</div>
            <Category />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
