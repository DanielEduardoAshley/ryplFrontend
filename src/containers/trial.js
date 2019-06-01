import React, { Component } from "react";
import "./style/trial.css";

class Trial extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  toggleMode = e => {
    const name = e.target.getAttribute("name");
    if (name) {
      this.setState({
        default: this.state[name]
      });
    }
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <div
            name="mode1"
            className={this.state.default["main"]}
            onClick={this.toggleMode}
          >
            <div className="mycard-container">
              <img
                className="mycard"
                src="https://source.unsplash.com/800x600/?video,1"
              />
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
              <img
                className="mycard response"
                src="https://source.unsplash.com/800x600/?video,2"
              />
              <img
                className="mycard response"
                src="https://source.unsplash.com/800x600/?video,3"
              />
              <img
                className="mycard response"
                src="https://source.unsplash.com/800x600/?video,4"
              />
              <img
                className="mycard response"
                src="https://source.unsplash.com/800x600/?video,5"
              />
              <img
                className="mycard response"
                src="https://source.unsplash.com/800x600/?video,6"
              />
              <img
                className="mycard response"
                src="https://source.unsplash.com/800x600/?video,7"
              />
              <img
                className="mycard response"
                src="https://source.unsplash.com/800x600/?video,8"
              />
            </div>
          </div>
          <div
            name="mode3"
            className={this.state.default["reply"]}
            onClick={this.toggleMode}
          >
            <div className="mycard-container replies">
              <img
                className="mycard replies"
                src="https://source.unsplash.com/800x600/?video,9"
              />
              <img
                className="mycard replies"
                src="https://source.unsplash.com/800x600/?video,10"
              />
              <img
                className="mycard replies"
                src="https://source.unsplash.com/800x600/?video,11"
              />
              <img
                className="mycard replies"
                src="https://source.unsplash.com/800x600/?video,12"
              />
              <img
                className="mycard replies"
                src="https://source.unsplash.com/800x600/?video,13"
              />
              <img
                className="mycard replies"
                src="https://source.unsplash.com/800x600/?video,14"
              />
              <img
                className="mycard replies"
                src="https://source.unsplash.com/800x600/?video,8"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Trial;
