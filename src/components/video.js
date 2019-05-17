// import React from "react";
import firebase from "../firebase";
import { Player } from "video-react";
// import "video.js/dist/video-js.css";
// import VideoRecorder from "react-video-recorder";
// import 'video.js/dist/video-js.css';
import React from "react";
// import  VideoRecorder, { handleVideoSelected } from "react-video-recorder";
// import RecordRTC,{ stream, MediaStreamRecorder } from "recordrtc"
// import MediaCapturer from 'react-multimedia-capture';
// import ReactMediaRecorder from 'react-multimedia-capture';

// import { onStopRecording } from "react-video-recorder";
// class App extends React.Component{

//   render(){
//     <VideoRecorder/>
//   }
// }

// // class Video extends React.Component {
// //   state = {
// //     urls: []
// //   };

// //   handleFileInput = async e => {
// //     const firstFile = e.target.files[0];

// //     const root = firebase.storage().ref();
// //     const newImage = root.child(`vids/${firstFile.name}`);

// //     try {
// //       const snapshot = await newImage.put(firstFile);
// //       const url = await snapshot.ref.getDownloadURL();
// //       this.setState({
// //         urls: this.state.urls.concat(url)
// //       });
// //       console.log(url);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };
// //   // render() {
// //   //   return (
// //   //   <div data-vjs-player>
// //   //       <video id="myVideo" ref={node => this.videoNode = node} className="video-js vjs-default-skin" playsinline></video>
// //   //   </div>
// //   //   );
// //   render() {
// //     return (
// //       <>
// //       <VideoRecorder />
// //         {/* <input
// //           type="file"
// //           name="myfile"
// //           onChange={e => this.handleFileInput(e)}
// //           onClick={this.getFirebasetoken}
// //         />
// //         {this.state.urls.map((e, i) => {
// //           return (
// //             <Player
// //               playsInline
// //               poster="https://bostoncrusaders.org/wp-content/uploads/2014/12/kid-sad-face-new-york-1r6di21.jpg"
// //               src={`${e}`}
// //             />
// //           );
// //         })} */}
// //       </>
// //     );
// //   }
// // }
// // // }
// class Video extends React.Component {
//   state = {
//     urls: []
//   };

//   handleFileInput = async e => {
//     const firstFile = e.target.files[0];

//     const root = firebase.storage().ref();
//     const newImage = root.child(`vids/${firstFile.name}`);

//     try {
//       const snapshot = await newImage.put(firstFile);
//       const url = await snapshot.ref.getDownloadURL();
//       this.setState({
//         urls: this.state.urls.concat(url)
//       });
//       console.log(url);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   stop() {
//     onStopRecording();
//   }

//   render() {
//     return (
//       <>
//         <VideoRecorder />
//         <input
//           type="file"
//           name="myfile"
//           onChange={e => this.handleFileInput(e)}
//           onClick={this.getFirebasetoken}
//         />
//         {this.state.urls.map((e, i) => {
//           return (
//             <Player
//               playsInline
//               poster="https://bostoncrusaders.org/wp-content/uploads/2014/12/kid-sad-face-new-york-1r6di21.jpg"
//               src={`${e}`}
//             />
//           );
//         })}
//         <button onClick={this.stop}>Button</button>
//       </>
//     );
//   }
// }
// const { videojs } = require("videojs-record");

class Video extends React.Component {
  state = {
    blob: [],
    url: ''
  };
   updatedBlob=(blobs)=>{
    this.setstate({
      blob : blobs
    })
  }
  
   blobs = [];
  componentDidMount() {
    const blobUpdate=()=>{
      this.setState({
        blob: 'here'
      })
    }
     
   const updateBlob=(recordedBlobs)=>{
    this.setState({
      blob: (this.state.blob || []).concat(recordedBlobs)
    })
    }
    

    
  
    
    var mediaSource = new MediaSource();
    mediaSource.addEventListener("sourceopen", handleSourceOpen, false);
    var mediaRecorder;
    var recordedBlobs;
    var sourceBuffer;

    var gumVideo = document.querySelector("video#gum");
    var recordedVideo = document.querySelector("video#recorded");

    var recordButton = document.querySelector("button#record");
    var playButton = document.querySelector("button#play");
    var downloadButton = document.querySelector("button#download");
    recordButton.onclick = toggleRecording;
    playButton.onclick = play;
    downloadButton.onclick = download;

    // console.log(location.host);
    // window.isSecureContext could be used for Chrome
    // var isSecureOrigin = location.protocol === 'https:' ||
    // location.host.includes('localhost');
    // if (!isSecureOrigin) {
    // alert('getUserMedia() must be run from a secure origin: HTTPS or localhost.' +
    //   '\n\nChanging protocol to HTTPS');
    // location.protocol = 'HTTPS';

    var constraints = {
      audio: true,
      video: true
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(successCallback, errorCallback);

    function successCallback(stream) {
      console.log("getUserMedia() got stream: ", stream);
      window.stream = stream;
      gumVideo.srcObject = stream;
    }

    function errorCallback(error) {
      console.log("navigator.getUserMedia error: ", error);
    }

    function handleSourceOpen(event) {
      console.log("MediaSource opened");
      sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp8"');
      console.log("Source buffer: ", sourceBuffer);
    }

    function handleDataAvailable(event) {
      if (event.data && event.data.size > 0) {
        recordedBlobs.push(event.data);
      }
    }

    function handleStop(event) {
      console.log("Recorder stopped: ", event);
    }

    function toggleRecording() {
      if (recordButton.textContent === "Start Recording") {
        startRecording();
      } else {
        stopRecording();
        recordButton.textContent = "Start Recording";
        playButton.disabled = false;
        downloadButton.disabled = false;
      }
    }

    // The nested try blocks will be simplified when Chrome 47 moves to Stable
    function startRecording() {
      var options = {
        mimeType: "video/webm;codecs=vp9",
        bitsPerSecond: 100000
      };
      recordedBlobs = [];
      try {
        mediaRecorder = new MediaRecorder(window.stream, options);
      } catch (e0) {
        console.log(
          "Unable to create MediaRecorder with options Object: ",
          options,
          e0
        );
        try {
          options = {
            mimeType: "video/webm;codecs=vp8",
            bitsPerSecond: 100000
          };
          mediaRecorder = new MediaRecorder(window.stream, options);
        } catch (e1) {
          console.log(
            "Unable to create MediaRecorder with options Object: ",
            options,
            e1
          );
          try {
            options = "video/mp4";
            mediaRecorder = new MediaRecorder(window.stream, options);
          } catch (e2) {
            alert("MediaRecorder is not supported by this browser.");
            console.error("Exception while creating MediaRecorder:", e2);
            return;
          }
        }
      }
      console.log(
        "Created MediaRecorder",
        mediaRecorder,
        "with options",
        options
      );
      recordButton.textContent = "Stop Recording";
      playButton.disabled = true;
      downloadButton.disabled = true;
      mediaRecorder.onstop = handleStop;
      mediaRecorder.ondataavailable = handleDataAvailable;
      mediaRecorder.start(10); // collect 10ms of data
      console.log("MediaRecorder started", mediaRecorder);
    }

    function stopRecording() {
      mediaRecorder.stop();
      console.log("Recorded Blobs: ", recordedBlobs);
      // blobs = recordedBlobs;
      updateBlob(recordedBlobs)
      recordedVideo.controls = true;
    }
    
    function play() {
      var superBuffer = new Blob(recordedBlobs, { type: "video/webm" });
      recordedVideo.src = window.URL.createObjectURL(superBuffer);
      const url = window.URL.createObjectURL(superBuffer)
      
    }

    function download() {
      var blob = new Blob(recordedBlobs, { type: "video/webm" });
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "test.webm";
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 100);

     
    }
  }
  
  handleFileStream = async e=> {
    const superBuffer = new Blob(this.state.blob, { type: "video/webm" });
      const url = window.URL.createObjectURL(superBuffer)
        const root = firebase.storage().ref();
        const newImage = root.child(`vids/${this.state.blob}`);
    
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
        console.log('hello')
      };


  render() {
      
    console.log(this.state)
    return <>{/* <VideoRecorder/> */}
    <button onClick={e=>this.handleFileStream(e)}>button</button>
    <Player
        playsInline
        poster="https://bostoncrusaders.org/wp-content/uploads/2014/12/kid-sad-face-new-york-1r6di21.jpg"
        src={this.state.url}
      />
    </>;
  }
}

export default Video;
