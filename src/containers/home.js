import React from "react";
import "./style/home.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

//components
// import Carousel from "../components/carousel";
// import SideNavBar from "../components/sideNavBar";

class Home extends React.Component {
  items = [
    "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad",
    "https://firebasestorage.googleapis.com/v0/b/cactus-338da.appspot.com/o/video2.mp4?alt=media&token=d4a19c46-9e7b-44b7-890b-c9f602a71452",
    "https://firebasestorage.googleapis.com/v0/b/cactus-338da.appspot.com/o/video1.mp4?alt=media&token=efa054c4-6edf-456c-b450-ffef9c3f634e",
    "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad",
    "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad",
    "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
  ];

  state = {
    categoryList: [
      "Sport",
      "News",
      "Politics",
      "Tech",
      "Culture",
      "Music",
      "Comedy",
      "Family",
      "Science"
    ],
    currentIndex: 0,
    itemsInSlide: 1,
    responsive: {
      0: {
        items: 1
      },
      1024: {
        items: 3
      }
    },
    stagePadding: {
      //overlay effect
      paddingLeft: 0,
      paddingRight: 0
    },
    galleryItems: this.galleryItems()
  };

  galleryItems() {
    return this.items.map(i => (
      <video key={i} controls style={{ width: "97%" }}>
        <source src={i} />
      </video>
    ));
  }

  slidePrevPage = () => {
    const currentIndex = this.state.currentIndex - this.state.itemsInSlide;
    this.setState({ currentIndex });
  };

  slideNextPage = () => {
    const {
      itemsInSlide,
      galleryItems: { length }
    } = this.state;
    let currentIndex = this.state.currentIndex + itemsInSlide;
    if (currentIndex > length) currentIndex = length;

    this.setState({ currentIndex });
  };

  handleOnSlideChange = event => {
    const { itemsInSlide, item } = event;
    this.setState({ itemsInSlide, currentIndex: item });
  };

  onSlideChange(e) {
    console.debug("Item`s position during a change: ", e.item);
    console.debug("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
    console.debug("Item`s position after changes: ", e.item);
    console.debug("Slide`s position after changes: ", e.slide);
  }

  render() {
    const { currentIndex, galleryItems, responsive, stagePadding } = this.state;

    return (
      <>
        <div className="entire-page">
          <div className="sideNav-wrapper">
            <header class="header" role="banner">
              <div class="nav-wrap">
                <nav class="main-nav" role="navigation">
                  <ul class="unstyled list-hover-slide">
                    {this.state.categoryList.map((cat, idx) => {
                      return (
                        <li style={{ fontSize: "14px" }}>
                          <a type={idx} onClick={this.changeCategory}>
                            {" "}
                            {cat}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </header>
          </div>
          {/* ---- SIDE NAV BAR ---- */}
          <div className="content-wrapper">
            <div className="trending">Most Viewed</div>

            <AliceCarousel
              items={galleryItems}
              slideToIndex={currentIndex}
              responsive={responsive}
              onInitialized={this.handleOnSlideChange}
              onSlideChanged={this.handleOnSlideChange}
              onResized={this.handleOnSlideChange}
              stagePadding={stagePadding}
              buttonsDisabled={true}
              dotsDisabled={false}
              swipeDisabled={false} //for mobile swipe?
              autoPlay={false}
              duration={3000}
              // infinite={true}
              disableAutoPlayOnAction={true}
              stopAutoPlayOnHover={true}
              playButtonEnabled={false}
              onSlideChange={this.onSlideChange}
              onSlideChanged={this.onSlideChanged}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
