import React from "react";
import firebase from "../firebase";
import { Player } from "video-react";
import "video.js/dist/video-js.css";
import VideoRecorder from "react-video-recorder";

class Video extends React.Component {
  state = {
    urls: []
  };

  componentDidMount() {
    // instantiate Video.js
    // this.player = videojs(this.videoNode, this.props, () => {
    //     // print version information at startup
    //     var version_info = 'Using video.js ' + videojs.VERSION +
    //         ' with videojs-record ' + videojs.getPluginVersion('record') +
    //         ' and recordrtc ' + RecordRTC.version;
    //     videojs.log(version_info);
    // });
    // // device is ready
    // this.player.on('deviceReady', () => {
    //     console.log('device is ready!');
    // });
    // // user clicked the record button and started recording
    // this.player.on('startRecord', () => {
    //     console.log('started recording!');
    // });
    // // user completed recording and stream is available
    // this.player.on('finishRecord', () => {
    //     // recordedData is a blob object containing the recorded data that
    //     // can be downloaded by the user, stored on server etc.
    //     console.log('finished recording: ', this.player.recordedData);
    // });
    // // error handling
    // this.player.on('error', (element, error) => {
    //     console.warn(error);
    // });
    // this.player.on('deviceError', () => {
    //     console.error('device error:', this.player.deviceErrorCode);
    // });
  }

  // destroy player on unmount
  componentWillUnmount() {
    // if (this.player) {
    //     this.player.dispose();
    // }
  }

  handleFileInput = async e => {
    const firstFile = e.target.files[0];

    const root = firebase.storage().ref();
    const newImage = root.child(`vids/${firstFile.name}`);

    try {
      const snapshot = await newImage.put(firstFile);
      const url = await snapshot.ref.getDownloadURL();
      this.setState({
        urls: this.state.urls.concat(url)
      });
      console.log(url);
    } catch (err) {
      console.log(err);
    }
  };
  // render() {
  //   return (
  //   <div data-vjs-player>
  //       <video id="myVideo" ref={node => this.videoNode = node} className="video-js vjs-default-skin" playsinline></video>
  //   </div>
  //   );
  render() {
    return (
      <>
        {/* <VideoRecorder /> */}

        <input
          type="file"
          name="myfile"
          onChange={e => this.handleFileInput(e)}
          onClick={this.getFirebasetoken}
        />
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
// }

export default Video;
