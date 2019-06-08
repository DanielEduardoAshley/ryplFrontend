import React from "react";
import "./style/videoCards.css";
import { Link } from "react-router-dom";

const VideoCards = props => {
  console.log(props);

  return (
    <>
      <div className="videoCard-wrapper">
        {props.mostViewedVid.map((e, i) => {
          return (
            <div className="video-card" key={i}>
              <div className="wrap">
                <video
                  className="video"
                  controls
                  style={{ width: "450px", height: "300px" }}
                >
                  <source type="video/mp4" src={e.video_url} />
                </video>
                <Link to={"/video"}>
                  <button className="react" />
                </Link>
                {/* <input className="react" type="button" value="React" /> */}
              </div>
              <div className="video-title">
                <h2>{e.video_title}</h2>
              </div>
              <Link to={`/VideoPage/${e.id}`}>
                <div>
                  <button className="video-card-btn">See Thread</button>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VideoCards;
