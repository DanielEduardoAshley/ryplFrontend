import React from "react";
import "./videoCards.css";
import { Player, ControlBar, PlayToggle } from "video-react";
import userImg from "./images/fakeuser.jpg";

const VideoCards = props => {
  const showLoading = <div>Loading</div>;
  const videos = (
    <div className="videoCard-wrapper">
      {props.mostViewedVid.map((e, i) => {
        console.log(e);
        return (
          <div className="home-page-videocards">
            <video
              controls
              style={{ width: "440px", height: "250px" }}
              // poster={`${e.thumbnail_url}`}
            >
              >
              <source type="video/mp4" src={e.video_url} preload={"none"} />
            </video>
            {/* <img src={"https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/uploads%2F21f30a80-8d10-11e9-b087-310e0299ff45%2Fy2mate.com%20-%20charlie_schmidts_keyboard_cat_the_original_J---aiyznGQ_360p.mp4?alt=media&token=d4ee9197-025e-4bf1-a083-04853b53d118"}></img> */}
            {/* <Player
              fluid={false}
              
              width={200}
              height={200}
              poster={e.thumbnail_url}
             
              src={e.video_url}
              >
               <ControlBar autoHide={false} disableDefaultControls={true} className={"my-class"}>
             <PlayToggle />
             </ControlBar>
              
              </Player>

              /> */}
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
