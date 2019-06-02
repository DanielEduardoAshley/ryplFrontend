import React, { Component } from "react";
import "./style/category.css";
import "./style/home.css";
import SideNavBar from "./../components/sideNavBar";
import serviceWorker from "./../services/services";
import { Link } from "react-router-dom";

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
        console.log(name);

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
          console.log(name);
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
    const page = (
      <>
        <div className="entire-page">
          <SideNavBar categoryList={this.state.categoryList} />
          <div className="content-wrapper">
            <div className="row category-name">
              <div> {this.state.category} </div> <hr />
            </div>{" "}
            <div className="row cards-display content">
              {" "}
              {this.state.videosList.map((e, i) => {
                return (
                  <Link to="/VideoPage/1">
                    <div className="card" key={i}>
                      <div className="row flex_row">
                        <div className="main-video ">
                          <video
                            className="video_container"
                            autoPlay={true}
                            loop={false}
                            muted=""
                          >
                            <source src={e.video_url} />;{" "}
                          </video>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="row flex_row">
                        <div className="card_content">
                          <h3>{e.video_title}</h3>{" "}
                          <h4 className="reactions">
                            Reactions: {e.responses.length}{" "}
                          </h4>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="row responses-row">
                        <div className="video_responses  col-9">
                          {" "}
                          {e.responses.map((res, i) => {
                            return (
                              <video
                                className="response_container"
                                autoPlay={true}
                                loop={false}
                                muted=""
                                key={i}
                              >
                                <source src={res.video_url} />{" "}
                              </video>
                            );
                          })}{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </Link>
                );
              })}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </>
    );
    return this.state.categoryList.length === 0 ? <div /> : page;
  }
}

export default Category;

{
  /* OLD CARDS DISPLAY
   return (
                <div className="card">
                  <div className="row flex_row">
                    <div className="main-video ">
                      <video
                        className="video_container"
                        autoplay={true}
                        loop={false}
                        muted=""
                      >
                        <source src={e.vidUrl} />;
                      </video>

                      <div className="card_content">
                        <h3>Title</h3>
                        <p> Description</p>
                      </div>
                    </div>
                    <div className="video_responses  ">
                      {e.responses.map((res, idx) => {
                        return (
                          <video
                            className="video_container"
                            autoplay={true}
                            loop={false}
                            muted=""
                          >
                            <source src={res.responseUrl} />;
                          </video>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })} */
}
