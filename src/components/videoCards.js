import React from "react";
import "./videoCards.css";
//trying user image
import userImg from "./images/fakeuser.jpg";
const VideoCards = props => {
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
              <div className="user-wrapper">
                <div className="user-image">
                  <img
                    src={userImg}
                    style={{ width: "40%", borderRadius: "50%" }}
                  />
                </div>
                <div className="user-name">
                  <h3>Yun</h3>
                </div>
              </div>
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
