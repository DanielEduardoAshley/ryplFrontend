import React from "react";
import "./videoCards.css";
import { Animated } from "react-animated-css";

const sampleVideo =
  "https://firebasestorage.googleapis.com/v0/b/cactus-338da.appspot.com/o/video2.mp4?alt=media&token=d4a19c46-9e7b-44b7-890b-c9f602a71452";

const VideoCards = props => {
  return (
    <Animated
      animationIn="slideInLeft"
      animationInDuration={2000}
      animationOutDuration={1000}
      isVisible={true}
    >
      <div className="videoCard-wrapper">
        <div className="video-card">
          <video className="video">
            <source
              type="video/mp4"
              src="https://firebasestorage.googleapis.com/v0/b/cactus-338da.appspot.com/o/video2.mp4?alt=media&token=d4a19c46-9e7b-44b7-890b-c9f602a71452"
            />
          </video>
          <div className="video-title">
            <h2>Title 1</h2>
          </div>
          <button className="video-card-btn">See Thread</button>
        </div>

        <div className="video-card">
          <video className="video">
            <source type="video/mp4" src="https://youtu.be/zcaskjhhXWQ" />
          </video>
          <div className="video-title">
            <h2>Title 2</h2>
          </div>
          <button className="video-card-btn">See Thread</button>
        </div>

        <div className="video-card">
          <video className="video">
            <source type="video/mp4" src="https://youtu.be/zcaskjhhXWQ" />
          </video>
          <div className="video-title">
            <h2>Title 3</h2>
          </div>
          <button className="video-card-btn">See Thread</button>
        </div>
        <div className="video-card">
          <video className="video">
            <source type="video/mp4" src="https://youtu.be/zcaskjhhXWQ" />
          </video>
          <div className="video-title">
            <h2>Title 4</h2>
          </div>
          <button className="video-card-btn">See Thread</button>
        </div>
        <div className="video-card">
          <video className="video">
            <source type="video/mp4" src="https://youtu.be/zcaskjhhXWQ" />
          </video>
          <div className="video-title">
            <h2>Title 5</h2>
          </div>
          <button className="video-card-btn">See Thread</button>
        </div>
      </div>
    </Animated>
  );
};

export default VideoCards;
