import React, { Component } from "react";
import "./style/trial.css";
import ShowReplies from "../components/replies";
import Axios from "axios";

class Trial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repliesStatus: false,
      repliesIdx: null,
      default: {
        main: "col-6 main-video ",
        reaction: "col-4 reactions-videos ",
        reply: "col-2 replies-videos "
      },
      mode1: {
        main: "col-6 main-video ",
        reaction: "col-4 reactions-videos ",
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
      }
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:3000/video/singlevid/1").then(data => {
      console.log("data: ", data);
    });
  }

  toggleMode = e => {
    const name = e.target.getAttribute("name");
    if (name === "mode1" || name === "mode2" || name === "mode3") {
      this.setState({
        default: this.state[name]
      });
    } else return;
  };

  handleResponseClick = e => {
    const index = e.target.getAttribute("index");
    const len = this.state.video.responses.length;
    if (index) {
      this.setState({
        repliesStatus: true,
        repliesIdx: index
      });
    }
  };

  render() {
    const idx = this.state.repliesIdx;
    return (
      <>
        <div className="wrapper">
          <div
            name="mode1"
            className={this.state.default["main"]}
            onClick={this.toggleMode}
          >
            <div className="mycard-container">
              <video className="mycard" controls>
                <source src={this.state.video.vidUrl} />
              </video>
              );
              {/* <video className="mycard" autoplay={false} loop={false} muted="">
                <source src="https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad" />
                // source="https://source.unsplash.com/800x600/?video,1"
              </video> */}
              <div className="video-info">
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div
            name="mode2"
            className={this.state.default["reaction"]}
            onClick={this.toggleMode}
          >
            <div className="mycard-container responses">
              {this.state.video.responses.map((vid, idx) => {
                return (
                  <video
                    className="mycard response"
                    controls
                    index={idx}
                    onClick={this.handleResponseClick}
                  >
                    <source src={vid.responseUrl} />
                  </video>
                );
              })}
            </div>
          </div>
          <div
            name="mode3 fade-in"
            className={this.state.default["reply"]}
            onClick={this.toggleMode}
          >
            <div className="mycard-container replies">
              {!this.state.repliesStatus || !this.state.repliesIdx
                ? null
                : this.state.video.responses[idx].replies.map((reply, idx) => {
                    return <ShowReplies url={reply.replyUrl} />;
                  })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Trial;

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
