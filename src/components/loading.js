import React from "react";
import LoadingVideo from "./images/Rypl.mp4";

const video = "https://media.giphy.com/media/kI3DHDgRrUj080On8p/giphy.mp4";
const Loading = props => {
  return (
    <div
      style={{
        width: "100vw",
        height: "70%",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <video autoPlay loop style={{ paddingTop: "100px" }}>
        <source src={video} />
      </video>
    </div>
  );
};

export default Loading;
