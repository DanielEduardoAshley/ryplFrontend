
import firebase from "../firebase"
import { Player } from "video-react";
import React from "react";
import "./videoplayer.css";
import VideoRecorder from "react-video-recorder";
import PropTypes from "prop-types";
import SpeechRecognition from "./annotation";



class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blob: [],
      url: "",
      urls: [],
      stopRecord: false,
    };
    this.videoPlayer = React.createRef();
  }

 
  handleFileStream = async e => {
    const superBuffer = new Blob(this.state.blob, { type: "video/webm" });
    const url = window.URL.createObjectURL(superBuffer);
    const root = firebase.storage().ref();
    const newImage = root.child(
      `vids/${this.state.blob[this.state.blob.length - 1]}`
    );

    try {
      const snapshot = await newImage.put(superBuffer);
      const urls = await snapshot.ref.getDownloadURL();
      this.setState({
        url: this.state.url.concat(urls)
      });
      console.log(url);
    } catch (err) {
      console.log(err);
    }
    console.log("hello");
  };

  handleFileInput = async e => {
    const firstFile = e.target.files[0];

    const root = firebase.storage().ref();
    const newImage = root.child(`vids/${firstFile.name}`);

    try {
      const snapshot = await newImage.put(firstFile);
      const url = await snapshot.ref.getDownloadURL();
      this.setState({
        urls: (this.state.urls || []).concat(url)
      });
      console.log(url);
    } catch (err) {
      console.log(err);
    }
  };
stopRecording=()=>{
  this.setState({
    stopRecord : true,
  })
}

  render() {


    return (
      <>
     
        <div className='player  '>
       <VideoRecorder
          onRecordingComplete={(
            videoblob,
            startedAt,
            thumbnailBlob,
            duration
          ) => {
            console.log(videoblob);
            console.log('thumb',thumbnailBlob);
            console.log(URL.createObjectURL(videoblob));
            const storageRef = firebase.storage().ref();
            const ref = storageRef.child("test/test.mp4");

            ref.put(videoblob).then(function(snapshot) {
              console.log("Uploaded a blob or file!", snapshot);
            });
          }}
          isOnInitially={false}
          OnStopRecording={(isReplayingVideo)=>{ console.log('replay',isReplayingVideo)         
        }}
            
        />
        <div className='annotation'> <SpeechRecognition reset={this.state.stopRecord} /></div>

        </div>
       

        <div className="upload-btn-wrapper">
          <button onClick={e => this.handleFileStream(e)} className="btn">Submit</button>
          <button className="btn" onClick={this.stopRecording}>Upload a file</button>
          <input
            type="file"
            name="myfile"
            onChange={e => this.handleFileInput(e)}
            onClick={this.getFirebasetoken}
          />
        </div>
    
      
        {this.state.urls.map((e, i) => {
          return (
            <Player
              playsInline
              poster="https://bostoncrusaders.org/wp-content/uploads/2014/12/kid-sad-face-new-york-1r6di21.jpg"
              src={`${e}`}
            />
          );
        })}
      </>
    );
  }
}

export default Video;
