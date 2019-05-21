import React from "react";
import firebase from "../firebase";

//components
import CarouselContainer from "../components/carousel";

class Home extends React.Component {
  state = {};

  componentDidMount() {}
  render() {
    return (
      <>
        <CarouselContainer />
      </>
    );
  }
}

export default Home;
