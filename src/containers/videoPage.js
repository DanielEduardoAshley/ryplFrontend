import React, { Component } from "react";
import "./style/VideoPage.css";
import ShowReplies from "../components/replies";
import Axios from "axios";
import serviceWorker from "../services/services";
import CardColor from "../services/cardColor";

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repliesStatus: false,
      repliesIdx: null,
      default: {
        main: "col-7 main-video ",
        reaction: "col-5 reactions-videos ",
        reply: "col-2 replies-videos "
      },
      mode1: {
        main: "col-7 main-video ",
        reaction: "col-5 reactions-videos ",
        reply: "col-2 replies-videos "
      },
      mode2: {
        main: "col-2 main-video ",
        reaction: "col-6 reactions-videos ",
        reply: "col-4 replies-videos"
      },
      mode3: {
        main: "col-2 main-video",
        reaction: "col-4 reactions-videos",
        reply: "col-6 replies-videos"
      },
      video: {
        masterVid: {},
        responseToMaster: []
      }
    };
  }

  componentDidMount() {
    const path = this.props.location.pathname.split("/");
    const id = parseInt(path[path.length - 1]);
    serviceWorker
      .getVidThread(id)
      .then(data => {
        console.log("video: ", data.data.data);
        this.setState({
          video: data.data.data
        });
        console.log("state is here: ", this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggleMode = e => {
    console.log("target ", e.target);
    const name = e.target.getAttribute("name");
    if (name === "mode1" || name === "mode2" || name === "mode3") {
      this.setState({
        default: this.state[name]
      });
    } else return;
  };

  handleResponseClick = e => {
    const index = e.target.getAttribute("index");
    if (index) {
      this.setState({
        repliesStatus: true,
        repliesIdx: index
      });
    }
  };

  render() {
    const idx = this.state.repliesIdx;
    const page = (
      <>
        <div className="wrapper">
          {!this.state.video ? (
            <></>
          ) : (
            <>
              <div
                name="mode1"
                className={this.state.default["main"]}
                onClick={this.toggleMode}
              >
                <div className="mycard-container" name="mode1">
                  <video className="mycard" controls>
                    {" "}
                    {this.state.video.masterVid.video_url ? (
                      <source src={this.state.video.masterVid.video_url} />
                    ) : (
                      <></>
                    )}
                  </video>
                  );
                  <div className="video-info" name="mode1">
                    <h2 name="mode1">Title</h2>
                    <p name="mode1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
              <div
                name="mode2"
                className={this.state.default["reaction"]}
                onClick={this.toggleMode}
              >
                <div className="row my-row" name="mode2">
                  <div className="mycard-container responses" name="mode2">
                    {!this.state.video.responseToMaster.length ? (
                      <></>
                    ) : (
                      this.state.video.responseToMaster.map((vid, idx) => {
                        return (
                          <video
                            className="mycard response"
                            controls
                            index={idx}
                            style={{ backgroundColor: CardColor[idx % 10] }}
                            onClick={this.handleResponseClick}
                          >
                            <source src={vid.video_url} />
                          </video>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
              <div
                name="mode3"
                className={this.state.default["reply"]}
                onClick={this.toggleMode}
              >
                <div
                  className="row my-row"
                  // uncomment below in case we wanted to change the color of the whole div to match the reaction color
                  // style={{ backgroundColor: CardColor[idx] }}
                >
                  <div className="mycard-container replies">
                    {!this.state.repliesStatus || !this.state.repliesIdx ? (
                      <></>
                    ) : (
                      this.state.video.responseToMaster[idx].response.map(
                        (reply, index) => {
                          return (
                            <ShowReplies url={reply.video_url} colorIdx={idx} />
                          );
                        }
                      )
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </>
    );
    return this.state.video.masterVid.video_url ? page : <div />;
  }
}

export default VideoPage;

// Old Dummy Data:
// video: {
//     vidUrl:
//       "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/userVideos%2Fe37ec800-83ca-11e9-a38a-e1a5c2c55deb?alt=media&token=516917a5-8a6c-4975-9e4e-a5f95ea1f1a5",
//     responses: [
//       {
//         responseUrl:
//           "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad",
//         replies: [
//           {
//             replyUrl:
//               "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/test%2Ftest.mp4?alt=media&token=ef354168-c799-4b95-aa5b-e3c2076a8f67"
//           },
//           {
//             replyUrl:
//               "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/test%2Ftest.mp4?alt=media&token=ef354168-c799-4b95-aa5b-e3c2076a8f67"
//           },
//           {
//             replyUrl:
//               "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/test%2Ftest.mp4?alt=media&token=ef354168-c799-4b95-aa5b-e3c2076a8f67"
//           },
//           {
//             replyUrl:
//               "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/test%2Ftest.mp4?alt=media&token=ef354168-c799-4b95-aa5b-e3c2076a8f67"
//           }
//         ]
//       },
//       {
//         responseUrl:
//           "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad",
//         replies: [
//           {
//             replyUrl:
//               "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/test%2Ftest.mp4?alt=media&token=ef354168-c799-4b95-aa5b-e3c2076a8f67"
//           },
//           {
//             replyUrl:
//               "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/test%2Ftest.mp4?alt=media&token=ef354168-c799-4b95-aa5b-e3c2076a8f67"
//           }
//         ]
//       },
//       {
//         responseUrl:
//           "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
//       },
//       {
//         responseUrl:
//           "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
//       },
//       {
//         responseUrl:
//           "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
//       },
//       {
//         responseUrl:
//           "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
//       },
//       {
//         responseUrl:
//           "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
//       },
//       {
//         responseUrl:
//           "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
//       }
//     ]
//   }
//   }
//   }
//   }
