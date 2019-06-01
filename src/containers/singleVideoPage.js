import React from "react";
import "./style/single.css";
import { Animated } from "react-animated-css";
import rypl from "../images/rypl.png";

class SingleVideo extends React.Component {
  state = {
    videos: [],
    commentVideos: [],
    layout1: "left-panel",
    layout2: "mid-panel",
    isVisible: false
  };

  componentDidMount() {
    // this.setState({ isVisible });
  }

  handleLayout = e => {
    this.setState({
      layout1: "mid-panel",
      layout2: "left-panel"
    });
  };

  // handleButton = e => {
  //   this.setState({ isVisible: true });
  // };

  render() {
    return (
      <>
        <Animated
          animationIn="slideInDown"
          animationInDuration={2000}
          animationInDelay={1000}
        >
          <div
            className="upper-master-display"
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "30px",
              border: "1px solid black"
            }}
          >
            <img src={rypl} style={{ width: "100%", height: "50vh" }}>
              {/* <source src="https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad" /> */}
            </img>
            <div style={{ width: "20%", textAlign: "center" }}>
              <h1>Title</h1>
              <p>Whatever description</p>
            </div>
          </div>
        </Animated>

        <div className="video-container">
          <Animated
            animationIn="fadeInLeft"
            animationInDuration={2000}
            animationInDelay={1000}
            isVisible={true}
          >
            <div className="left-panel">
              <div>
                <h1>Original Video</h1>
              </div>
              <div>
                <img src={rypl} style={{ width: "100%" }} />
              </div>
            </div>
          </Animated>
          {/*-----ORIGINAL VIDEO END----- */}
          <Animated
            animationIn="fadeInLeft"
            animationInDuration={2000}
            animationInDelay={2000}
            isVisible={true}
          >
            <div className="mid-panel">
              <div>
                <h1>Video Thread</h1>
              </div>
              <img src={rypl} style={{ width: "70%", paddingBottom: "10px" }} />
              <img src={rypl} style={{ width: "70%", paddingBottom: "10px" }} />
              <img src={rypl} style={{ width: "70%", paddingBottom: "10px" }} />
            </div>
          </Animated>
          {/*-----REACTION VIDEO END----- */}
          <Animated
            animationIn="fadeInLeft"
            animationInDuration={2000}
            animationInDelay={3000}
            isVisible={true}
          >
            <div className="right-panel">
              <div>
                <h1>Video Thread</h1>
              </div>
              <img src={rypl} style={{ width: "40%", paddingBottom: "10px" }} />
              <img src={rypl} style={{ width: "40%", paddingBottom: "10px" }} />
              <img src={rypl} style={{ width: "40%", paddingBottom: "10px" }} />
              <img src={rypl} style={{ width: "40%", paddingBottom: "10px" }} />
              <img src={rypl} style={{ width: "40%", paddingBottom: "10px" }} />
            </div>
          </Animated>
        </div>
      </>
    );
  }
}

export default SingleVideo;
