import firebase from "../firebase";
import React from "react";
import "./video.css";
import VideoRecorder from "react-video-recorder";
import serviceWorker from "../services/services";
import Annotations from "./annotation";
import AuthContext from "../contexts/auth";
import { Redirect } from "react-router-dom";

const uuid = require("uuid/v1");

const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition)();

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-US";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blob: null,
      videoUrl: "",
      upload: "",
      thumbnails: [],
      thumbnail: "",
      stopRecord: false,
      isRecording: false,
      preview: 0,
      recording: 0,
      categoryList: [],
      description: "",
      videoTitle: "",
      categoryId: null,
      annotation: null,
      responseTo: null,
      transcript: "",
      uploading: false,
      completed: false
    };
  }

  static contextType = AuthContext;

  componentDidMount() {
    serviceWorker.getAllCategories().then(response => {
      this.setState({
        categoryList: response.data.data
      });
    });
  }

  submit = async () => {
    if (!this.state.blob && !this.state.upload.length) {
      alert("Please either Upload or Record a Video");
    } else if (this.state.blob && this.state.upload) {
      alert("Please choose to either  Upload or Record");
    } else if (this.state.blob) {
      await this.setState({ uploading: true });
      console.log(this.state);
      await this.handleFileStream();

      const {
        categoryId,
        videoTitle,
        videoUrl,
        thumbnail,
        description,
        annotation,
        responseTo
      } = this.state;

      serviceWorker
        .postVideo(
          1,
          categoryId,
          videoTitle,
          responseTo,
          videoUrl,
          thumbnail,
          annotation,
          description
        )
        .then(() => {
          this.setState({ uploading: false, completed: true });
        })
        .catch(err => {});
    } else if (this.state.upload) {
      const { categoryId } = this.state;
      const {
        videoTitle,
        upload,
        thumbnail,
        description,
        annotation,
        responseTo
      } = this.state;

      serviceWorker
        .postVideo(
          1,
          categoryId,
          videoTitle,
          responseTo,
          upload,
          thumbnail,
          annotation,
          description
        )
        .then(() => {
          this.setState({ uploading: false, completed: true });
        })
        .catch(err => {});
    }
  };

  handleFileStream = async e => {
    if (!this.state.blob) return;

    const root = firebase.storage().ref();

    const videoUrl = root.child(`userVideos/${this.context.uid}/${uuid()}`);
    const thumbUrl = root.child(`userThumbnail/${this.context.uid}/${uuid()}`);

    try {
      const movie = await videoUrl.put(this.state.blob);
      const movieUrl = await movie.ref.getDownloadURL();
      const thumb = await thumbUrl.put(this.state.thumbnail);
      const thumbnailUrl = await thumb.ref.getDownloadURL();

      this.setState({
        videoUrl: movieUrl,
        thumbnail: thumbnailUrl
      });
    } catch (err) {
      console.log("error", err);
    }
  };

  handleFileInput = async e => {
    const firstFile = e.target.files[0];

    const root = firebase.storage().ref();
    const newImage = root.child(`uploads/${uuid()}/${firstFile.name}`);

    try {
      const snapshot = await newImage.put(firstFile);
      const url = await snapshot.ref.getDownloadURL();

      this.setState({
        upload: url
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleFileInputThumbnail = async e => {
    const firstFile = e.target.files[0];

    const root = firebase.storage().ref();
    const newImage = root.child(
      `uploads/thumbnail/${uuid()}/${firstFile.name}`
    );

    try {
      const snapshot = await newImage.put(firstFile);
      const url = await snapshot.ref.getDownloadURL();

      this.setState({
        thumbnail: url
      });
    } catch (err) {
      console.log(err);
    }
  };

  setBlob = (videoblob, thumb) => {
    this.setState({
      blob: videoblob,
      thumbnail: thumb
    });
  };

  resetBlob = () => {
    this.setState({
      blob: null
    });
  };

  handleDescription = e => {
    this.setState({
      description: e.currentTarget.value
    });
  };

  handleTitle = e => {
    this.setState({
      videoTitle: e.currentTarget.value
    });
  };

  handleCategory = e => {
    this.setState({
      categoryId: e.currentTarget.value
    });
  };

  render() {
    if (this.state.completed) return <Redirect to="/" />;
    return !this.context ? (
      <Redirect to="/login" />
    ) : this.state.categoryList.length === 0 ? (
      <div> Loading </div>
    ) : this.state.uploading ? (
      <h1>Uploading Now...</h1>
    ) : (
      <>
        <div className="entire-video-page">
          <div className="video-record-left-panel">
            <VideoRecorder
              onRecordingComplete={(
                videoblob,
                startedAt,
                thumbnailBlob,
                duration
              ) => {
                this.setBlob(videoblob, thumbnailBlob);
              }}
              isOnInitially={false}
              // onStartRecording={() => {this.reset()}}
              onStopRecording={() => {
                // this.reset();
                this.setBlob();
                return null;
              }}
            />{" "}
          </div>
          {/* ----RIGHT PANEL OF THE PAGE START HERE----- */}{" "}
          <div className="handle-record-right-panel">
            <div className="handle-title">
              <div className="form-title"> Title </div>{" "}
              <input
                className="input-form"
                type="text"
                onChange={e => this.handleTitle(e)}
                placeholder="Enter a title..."
                name="title"
              />
            </div>{" "}
            <div className="handle-description">
              <div className="form-title"> Description </div>{" "}
              <input
                className="input-form"
                type="text"
                placeholder="Include a description..."
                onChange={e => this.handleDescription(e)}
                name="description"
              />
            </div>{" "}
            <div className="handle-category-dropdown">
              <div className="form-title"> Category </div>{" "}
              <select
                id="inputState"
                className="select-dropdown"
                // defaultValue="Choose.."
                defaultValue={this.state.category}
                onChange={this.handleCategory}
              >
                <option> Select </option>{" "}
                {this.state.categoryList.map((e, i) => {
                  return (
                    <option key={i} value={e.id}>
                      {" "}
                      {e.name}{" "}
                    </option>
                  );
                })}{" "}
              </select>{" "}
            </div>
            <div className="upload-btn-wrapper">
              <h3
                style={{
                  textAlign: "left",
                  marginLeft: "30"
                }}
              >
                Choose a video from my computer{" "}
              </h3>{" "}
              <div className="upload-btn">
                <input
                  type="file"
                  name="myfile"
                  onChange={e => this.handleFileInput(e)}
                  onClick={this.getFirebasetoken}
                  style={{
                    fontSize: "16px",
                    borderRadius: "5px",
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#292D33",
                    border: "1px solid #292D33 ",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "700",
                    cursor: "pointer"
                  }}
                />{" "}
              </div>{" "}
              <div className="upload-btn">
                {" "}
                <h3
                  style={{
                    textAlign: "left",
                    cursor: "pointer"
                  }}
                >
                  Choose a thumbnail from my computer{" "}
                </h3>{" "}
                <input
                  type="file"
                  name="myfile"
                  onChange={e => this.handleFileInputThumbnail(e)}
                  onClick={this.getFirebasetoken}
                  style={{
                    fontSize: "16px",
                    borderRadius: "5px",
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#292D33",
                    border: "1px solid #292D33 ",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "700",
                    cursor: "pointer"
                  }}
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="submit-btn-wrapper">
              <button
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#2a2d34",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "700",
                  cursor: "pointer"
                }}
                onClick={this.submit}
              >
                Submit{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* <Annotations recording={this.state.recording} /> */}{" "}
      </>
    );
  }
}

export default Video;
