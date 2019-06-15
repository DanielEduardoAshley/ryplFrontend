import React, { Component } from "react";
import "./style/VideoPage.css";
import ShowReplies from "../components/replies";
import Axios from "axios";
import serviceWorker from "../services/services";
import CardColor from "../services/cardColor";
import { Link } from "react-router-dom";

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repliesStatus: false,
      repliesIdx: null,
      default: {
        main: "col-7 main-video ",
        reaction: "col-5 reactions-videos ",
        reply: "col-1 replies-videos "
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
        // console.log("video: ", data.data.data);
        this.setState({
          video: data.data.data
        });
        // console.log("state is here: ", this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggleMode = e => {
    console.log("target ", e.target);
    const name = e.target.getAttribute("name");
    if (name === "mode1" || name === "mode2" || name === "mode3") {
      if (name === "mode3" && !this.state.repliesIdx) {
        return;
      }

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

  watchedVid = id => {
    console.log("here");
    serviceWorker
      .addView(id)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.state.video.masterVid.video_title);
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
                onMouseEnter={this.toggleMode}
              >
                <div className="mycard-container" name="mode1">
                  {this.state.video.masterVid.video_url ? (
                    <>
                      <div className="row my-row">
                        <video
                          className="mycard"
                          controls
                          onEnded={() =>
                            this.watchedVid(this.state.video.masterVid.id)
                          }
                        >
                          <source src={this.state.video.masterVid.video_url} />
                        </video>

                        <Link to={`/video/${this.state.video.masterVid.id}`}>
                          <button class="icon-btn add-btn">
                            <div class="add-icon" />
                            <div class="btn-txt">Add a Rypl</div>
                          </button>
                        </Link>
                      </div>

                      <div className="video-info" name="mode1">
                        <h2 name="mode1">
                          {this.state.video.masterVid.video_title}
                        </h2>
                        <p name="mode1">
                          {this.state.video.masterVid.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div
                name="mode2"
                className={this.state.default["reaction"]}
                onClick={this.toggleMode}
                onMouseEnter={this.toggleMode}
              >
                <div className="row my-row" name="mode2">
                  <div className="mycard-container responses" name="mode2">
                    {!this.state.video.responseToMaster.length ? (
                      <></>
                    ) : (
                      this.state.video.responseToMaster.map((vid, idx) => {
                        return (
                          <div
                            className="card-title-btn container shadow"
                            style={{ backgroundColor: CardColor[idx % 10] }}
                          >
                            <video
                              className="mycard response"
                              controls
                              index={idx}
                              // style={{ backgroundColor: CardColor[idx % 10] }}
                              onClick={this.handleResponseClick}
                              onEnded={() => this.watchedVid(vid.id)}
                            >
                              <source src={vid.video_url} />
                            </video>
                            <div className="title-and-btn">
                              <span className="reactions card-mytitle">
                                <h3>{vid.video_title}</h3>
                              </span>
                              <Link to={`/video/${vid.id}`}>
                                <button className="reactions icon-btn add-btn">
                                  <div className="add-icon" />
                                  <div className="btn-txt">Add a Rypl</div>
                                </button>
                              </Link>
                            </div>
                          </div>
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
                onMouseEnter={this.toggleMode}
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
