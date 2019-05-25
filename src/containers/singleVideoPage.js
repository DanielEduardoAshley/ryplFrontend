import React from "react";
import "./style/single.css";

//Left panel (Original)
//Middle panel (Reaction)
//Right panel (Reaction to reaction)
// import VerticalMode from "../components/singleVideoLeft";

class SingleVideo extends React.Component {
  state = {
    videos: [],
    commentVideos: []
  };

  render() {
    return (
      <>
        <div className="video-container">
          <div className="left-panel">
            <div>
              <video>
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
                  controls
                  style={{ width: "97%" }}
                />
              </video>
              <div>
                <h3>Title: Dan Testing</h3>
              </div>
              <div>
                <p>Annotatation lives here</p>
              </div>
            </div>
          </div>
          <div className="mid-panel">
            <div>Reaction Video</div>
          </div>
          <div className="right-panel">
            <div>React to reaction</div>
          </div>
        </div>
      </>
    );
  }
}

export default SingleVideo;
