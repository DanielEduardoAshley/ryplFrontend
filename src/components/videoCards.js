import React from "react";
import "./videoCards.css";

const VideoCards = props => {
  console.log(props);
  const showLoading = <div>Loading</div>;
  const videos = (
    <div className="videoCard-wrapper">
      {props.mostViewedVid.map((e, i) => {
        return (
          <div className="video-card">
            <video
              className="video"
              controls
              style={{ width: "450px", height: "300px" }}
            >
              >
              <source type="video/mp4" src={e.video_url} />
            </video>
            <div className="video-title">
              <h2>{e.video_title}</h2>
            </div>
            <button className="video-card-btn">See Thread</button>
          </div>
        );
      })}
    </div>
  );
  return props ? videos : showLoading;
};

export default VideoCards;
