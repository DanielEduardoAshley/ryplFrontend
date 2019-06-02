import React from "react";
import "./style/home.css";
import serviceWorker from "../services/services";

class Home extends React.Component {
  state = {
    categoryList: [],
    videos: []
  };

  componentDidMount() {
    serviceWorker
      .getMostViewedVids()
      .then(data => {
        console.log(data.data);
        this.setState({ categoryList: data.data.allCategories });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { currentIndex, galleryItems, responsive, stagePadding } = this.state;

    return (
      <>
        <div className="entire-page">
          <div className="sideNav-wrapper">
            <header className="header" role="banner">
              <div className="nav-wrap">
                <nav className="main-nav" role="navigation">
                  <ul className="unstyled list-hover-slide">
                    {this.state.categoryList.map((cat, idx) => {
                      return (
                        <li style={{ fontSize: "14px" }} key={idx}>
                          <a type={idx} onClick={this.changeCategory}>
                            {" "}
                            {cat.name}
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
            {/* 
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
            /> */}
            <div>{this.renderGallery()}</div>
            {this.renderThumbs()}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
