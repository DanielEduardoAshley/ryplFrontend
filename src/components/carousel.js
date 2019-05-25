import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import "./style/carousel.css";


let categoryList = [
  {
    key: 1,
    content: (
      <video width="140" height="80" controls>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
          type="video/webm"
        />
      </video>
    )
  },
  {
    key: 2,
    content: (
      <video width="140" height="80" controls>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
          type="video/webm"
        />
      </video>
    )
  },
  { key: 3, content: <h1>Funny</h1> },
  { key: 4, content: <h1>DanIsAwesome</h1> },
  { key: 5, content: <h1>AbdulIsAwesome</h1> },
  { key: 6, content: <h1>YunIsAwesome</h1> },
  { key: 7, content: <h1>SyedIsOk</h1> }
];

export default class CarouselContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNavigation: false,
      clickedSlide: 0,
      videos: [
        {
          key: 0,
          src:
            "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0d",
          title: "example title"
        },
        {
          key: 1,
          src:
            "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0d",
          title: "example title"
        },
        {
          key: 2,
          src:
            "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0d",
          title: "example title"
        },
        {
          key: 3,
          src:
            "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0d",
          title: "example title"
        },
        {
          key: 4,
          src:
            "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0d",
          title: "example title"
        },
        {
          key: 5,
          src:
            "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0d",
          title: "example title"
        }
      ]
    };
  }
  handleClick = event => {
    console.log(event)
  this.setState({
    clickedSlide: event.target.key
  });
};

  renderSlides = () => {
    const videos = this.state.videos.map(video => {
      return {
        key: video.key,
        onClick: this.handleClick,
        content: (
          <div key={video.key} onClick={this.handleClick}>
            <video width="140" height="80" controls>
              <source src={video.src} type="video/webm" />
            </video>
          </div>
        )
      };
    });
    console.log(videos)
    return videos
  };

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

 
  render() {
    return (
      <>
        <div className="window-view">
          <div className="video-carousel">
            <Carousel
              slides={this.renderSlides()}
              handleGoToSlide={this.handleClick}
              goToSlide={this.state.clickedSlide}
              showNavigation={this.state.showNavigation}
            />
          </div>
          <div className="category-carousel">
            <Carousel
              slides={categoryList}
              showNavigation={this.state.showNavigation}
            />
          </div>
        </div>
      </>
    );
  }
}
