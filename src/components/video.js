// import React from "react";
// import firebase from "../firebase";
// import { Player } from "video-react";
// import "video.js/dist/video-js.css";
// import VideoRecorder from "react-video-recorder";
// import 'video.js/dist/video-js.css';
import React from "react";
import VideoRecorder from "react-video-recorder";
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
  componentDidMount() {
    console.log();
  }
  render() {
    return (
      <VideoRecorder
        onTurnOnCamera={e => {
          console.log("here1");
        }}
        onStartRecording={e => {
          console.log("here2");
        }}
        onRecordingComplete={(videoBlob, startedAt, thumbnailBlob, duration) =>
          console.log("hello", videoBlob, startedAt, thumbnailBlob, duration)
        }
      />
    );
  }
}
export default Video;
