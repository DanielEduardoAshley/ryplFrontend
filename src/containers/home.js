import React from "react";
import "./style/home.css";
import serviceWorker from "../services/services";
import { Link } from "react-router-dom";
//components
import SideNavBar from "../components/sideNavBar";
import VideoCards from "../components/videoCards";

class Home extends React.Component {
  state = {
    mostViewedVid: [],
    categoryList: []
  };

  componentDidMount() {
    serviceWorker
      .getMostViewedVids()
      .then(data => {
        console.log(data.data);
        this.setState(
          {
            categoryList: data.data.allCategories,
            mostViewedVid: data.data.popVids
          },
          () => {
            console.log(this.state, "here");
          }
        );
      })
      .catch(err => console.log(err));
  }
  render() {
    const page = (
      <div className="entire-page">
        <SideNavBar categoryList={this.state.categoryList} />

        <div className="content-wrapper">
          <div className="trending">Most Viewed</div>

          <VideoCards mostViewedVid={this.state.mostViewedVid} />
        </div>
      </div>
    );

    return this.state.categoryList.length === 0 ? <div>Loading</div> : page;
  }
}
export default Home;
