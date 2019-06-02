import React from "react";
import "./style/videoCards.css";

const VideoCards = props => {
  return (
    <div className="videoCard-wrapper">
      <div className="video-card">
        <video
          className="video"
          controls
          style={{ width: "450px", height: "300px" }}
        >
          <source
            type="video/mp4"
            src="https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/IMG_1958.webm?alt=media&token=10c18634-5403-45b2-8ef8-59be99e7a73f"
          />
        </video>
        <div className="video-title">
          <h2>Title</h2>
        </div>
        <button className="video-card-btn">See Thread</button>
      </div>

      <div className="video-card">
        <video
          className="video"
          controls
          style={{ width: "450px", height: "300px" }}
        >
          <source
            type="video/mp4"
            src="https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/userVideos%2Fe37ec800-83ca-11e9-a38a-e1a5c2c55deb?alt=media&token=516917a5-8a6c-4975-9e4e-a5f95ea1f1a5"
          />
        </video>
        <div className="video-title">
          <h2>Title</h2>
        </div>
        <button className="video-card-btn">See Thread</button>
      </div>

      <div className="video-card">
        <video
          className="video"
          controls
          style={{ width: "450px", height: "300px" }}
        >
          <source
            type="video/mp4"
            src="https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/userVideos%2F26d9cf90-83c7-11e9-b4f2-658cfa9dbd31?alt=media&token=357c8aaf-55e8-44ef-9db4-8f7662abcfa4"
          />
        </video>
        <div className="video-title">
          <h2>Title</h2>
        </div>
        <button className="video-card-btn">See Thread</button>
      </div>
      <div className="video-card">
        <video
          className="video"
          controls
          style={{ width: "450px", height: "300px" }}
        >
          <source
            type="video/mp4"
            src="https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/test%2Ftest.mp4?alt=media&token=ef354168-c799-4b95-aa5b-e3c2076a8f67"
          />
        </video>
        <div className="video-title">
          <h2>Title</h2>
        </div>
        <button className="video-card-btn">See Thread</button>
      </div>
      <div className="video-card">
        <video
          className="video"
          controls
          style={{ width: "450px", height: "300px" }}
        >
          <source
            type="video/mp4"
            src="https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/IMG_1957.webm?alt=media&token=1ca7c2cb-d582-4854-873c-10f48c4c3484"
          />
        </video>
        <div className="video-title">
          <h2>Title</h2>
        </div>
        <button className="video-card-btn">See Thread</button>
      </div>
      <div className="video-card">
        <video
          className="video"
          controls
          style={{ width: "450px", height: "300px" }}
        >
          <source
            type="video/mp4"
            src="https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/IMG_1957.webm?alt=media&token=1ca7c2cb-d582-4854-873c-10f48c4c3484"
          />
        </video>
        <div className="video-title">
          <h2>Title</h2>
        </div>
        <button className="video-card-btn">See Thread</button>
      </div>
    </div>
  );
};

export default VideoCards;
