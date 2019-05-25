import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

class Category extends React.Component {
  //dummy data
  items = [
    "News",
    "Sports",
    "Entertainment",
    "Education",
    "Funny",
    "Shows",
    "Cool",
    "International"
  ];

  state = {
    currentIndex: 0,
    itemsInSlide: 1,
    responsive: {
      0: {
        items: 3
      },
      1024: {
        items: 6
      }
    },
    stagePadding: {
      //overlay effect
      paddingLeft: 0,
      paddingRight: 0
    },
    galleryItems: this.galleryItems()
  };

  // galleryItems() {
  //   return this.items.map(i => (
  //     <video>
  //       <source src={i} type="video" controls />
  //     </video>
  //   ));
  // }

  galleryItems() {
    return this.items.map(i => (
      <button
        className="category-btn"
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "700",
          paddingTop: "5px",
          paddingBottom: "5px",
          backgroundColor: "#009ddc",
          color: "#efefef",
          width: "95%",
          borderRadius: "15px"
        }}
        key={i}
      >
        {i}
      </button>
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

  render() {
    const { currentIndex, galleryItems, responsive, stagePadding } = this.state;

    return (
      <div>
        <AliceCarousel
          items={galleryItems}
          slideToIndex={currentIndex}
          responsive={responsive}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          onResized={this.handleOnSlideChange}
          stagePadding={stagePadding}
          buttonsDisabled={true}
          dotsDisabled={true}
          swipeDisabled={true} //for mobile swipe?
          autoPlay={true}
          duration={800}
          // infinite={true}
          disableAutoPlayOnAction={true}
          stopAutoPlayOnHover={true}
          playButtonEnabled={false}
        />
        {/* <button onClick={this.slidePrevPage}>Prev</button>
        <button onClick={this.slideNextPage}>Next</button> */}
      </div>
    );
  }
}

export default Category;
