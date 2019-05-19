import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import { Player } from "video-react";

let slides = [
  {
    key: uuidv4(),
    content: (
      <video width="320" height="240" controls>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0d"
          type="video/webm"
        />
      </video>
    )
  },

  {
    key: uuidv4(),
    content: (
      <video width="640" height="480" controls>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
          type="video/webm"
        />
      </video>
    )
  },

  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/802/?random" alt="2" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/600/803/?random" alt="3" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/500/?random" alt="4" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/804/?random" alt="5" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/500/800/?random" alt="6" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/600/?random" alt="7" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/805/800/?random" alt="8" />
  }
];

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 10,
    showNavigation: true,
    config: config.gentle
  };

  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <>
        <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
          <Carousel
            slides={slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
          />
          <div
            style={{
              margin: "0 auto",
              marginTop: "2rem",
              width: "50%",
              display: "flex",
              justifyContent: "space-around"
            }}
          >
            <div>
              <label>Go to slide: </label>
              <input name="goToSlide" onChange={this.onChangeInput} />
            </div>
            <div>
              <label>Offset Radius: </label>
              <input name="offsetRadius" onChange={this.onChangeInput} />
            </div>
            <div>
              <label>Show navigation: </label>
              <input
                type="checkbox"
                checked={this.state.showNavigation}
                name="showNavigation"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  this.setState({ showNavigation: e.target.checked });
                }}
              />
            </div>
            <div>
              <button
                onClick={(e: React.MouseEvent) => {
                  this.setState({ config: config.gentle });
                }}
                disabled={this.state.config === config.gentle}
              >
                Gentle Transition
              </button>
            </div>
            <div>
              <button
                onClick={(e: React.MouseEvent) => {
                  this.setState({ config: config.slow });
                }}
                disabled={this.state.config === config.slow}
              >
                Slow Transition
              </button>
            </div>
            <div>
              <button
                onClick={(e: React.MouseEvent) => {
                  this.setState({ config: config.wobbly });
                }}
                disabled={this.state.config === config.wobbly}
              >
                Wobbly Transition
              </button>
            </div>
            <div>
              <button
                onClick={(e: React.MouseEvent) => {
                  this.setState({ config: config.stiff });
                }}
                disabled={this.state.config === config.stiff}
              >
                Stiff Transition
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
