import React, { Component } from "react";
import "./style/home.css";
import "./style/category.css";
import "../components/style/videoCards.css";
import SideNavBar from "./../components/sideNavBar";
import serviceWorker from "./../services/services";
import { Link } from "react-router-dom";
import Loading from "../components/loading";
//for fake userimage
import userImg from "../images/fakeuser.jpg";

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      categoryList: [],
      videosList: [
        {
          vidUrl:
            "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad",
          responses: [
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/cactus-338da.appspot.com/o/video1.mp4?alt=media&token=efa054c4-6edf-456c-b450-ffef9c3f634e"
            },
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
            },
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
            },
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
            },
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
            },
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
            },
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
            },
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
            }
          ]
        },
        {
          vidUrl:
            "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad",
          responses: [
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/cactus-338da.appspot.com/o/video1.mp4?alt=media&token=efa054c4-6edf-456c-b450-ffef9c3f634e"
            },
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
            },
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
            }
          ]
        },
        {
          vidUrl:
            "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad",
          responses: [
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/cactus-338da.appspot.com/o/video1.mp4?alt=media&token=efa054c4-6edf-456c-b450-ffef9c3f634e"
            },
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
            },
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
            }
          ]
        },
        {
          vidUrl:
            "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad",
          responses: [
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/cactus-338da.appspot.com/o/video1.mp4?alt=media&token=efa054c4-6edf-456c-b450-ffef9c3f634e"
            },
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
            },
            {
              responseUrl:
                "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad"
            }
          ]
        },
        {
          vidUrl:
            "https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad",
          responses: []
        }
      ]
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    serviceWorker
      .getVidsOfCategory(id)
      .then(data => {
        const { categories, vidsOfCategory } = data.data.info;
        const { name } = data.data.info.categoryName;
        console.log("video:", vidsOfCategory);

        this.setState({
          categoryList: categories,
          videosList: vidsOfCategory,
          category: name
        });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(props) {
    if (this.props.match.params.id !== props.match.params.id) {
      const { id } = this.props.match.params;
      console.log(id);
      serviceWorker
        .getVidsOfCategory(id)
        .then(data => {
          const { categories, vidsOfCategory } = data.data.info;
          const { name } = data.data.info.categoryName;

          this.setState({
            categoryList: categories,
            videosList: vidsOfCategory,
            category: name
          });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    console.log("STATE in category: ", this.state);

    const page = (
      <>
        <div className="entire-page">
          <SideNavBar categoryList={this.state.categoryList} />
          <div className="content-wrapper">
            <div className="row category-name">
              <div> {this.state.category} </div> <hr />
            </div>{" "}
            <div className="video-wrapper">
              {this.state.videosList.map((e, i) => {
                return (
                  <Link
                    to={`/VideoPage/ ${e.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="one-wrapper">
                      <div className="top-original-video" key={i}>
                        <video
                          className="one-video"
                          id={e.id}
                          autoPlay={false}
                          loop={false}
                          muted={true}
                          controls
                        >
                          <source src={e.video_url} />;
                        </video>
                        <div className="user-wrapper">
                          <div className="user-image">
                            <img
                              src={userImg}
                              style={{ width: "40%", borderRadius: "50%" }}
                            />
                          </div>
                          <div className="user-name">
                            <h3>Yun</h3>
                          </div>
                          <button className="see-thread-btn">
                            See Thread: {e.responses.length}
                          </button>
                        </div>
                        <div className="title">
                          <h2>{e.video_title}</h2>
                          {/* <h3>Responses: {e.responses.length}</h3> */}
                        </div>
                      </div>
                      {/* TOP-PANEL-END-HERE */}
                      {/* <div className="bottom-panel-reactions">
                        {e.responses.map((res, i) => {
                          return (
                            <video
                              className="reaction-video-single"
                              autoPlay={false}
                              loop={false}
                              muted=""
                              key={i}
                            >
                              <source src={res.video_url} />
                            </video>
                          );
                        })}
                      </div> */}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
    return this.state.categoryList.length === 0 ? <Loading /> : page;
  }
}

export default Category;
