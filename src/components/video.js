import firebase from "../firebase";
import { Player } from "video-react";
import React from "react";
import "./video.css";
import VideoRecorder from "react-video-recorder";
import PropTypes from "prop-types";
  import SpeechRecognition, { StartAnontation, StopAnontation} from "./annotation";
const uuid = require('uuid/v1')

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startingAnnontations: false,
      blob: null,
      url: "",
      urls: [],
      thumbnail: [],
      stopRecord: false,
      isRecording: false,
      preview: 0,
      func: 0
    };
    this.videoPlayer = React.createRef();
  }

componentDidMount(){

  
}


  handleFileStream = async e => {

    if(!this.state.blob) return;

    const storageRef = firebase.storage().ref();
    
    const ref = storageRef.child(`userVideos/${uuid()}`);
    const ref1 = storageRef.child(`userThumbnail/${uuid()}`);

    console.log('testblob', this.state.blob)
    ref.put(this.state.blob).then(function(snapshot) {
      console.log("Uploaded a blob or file!", snapshot);
    })

    ref1.put(this.state.thumbnail).then(function(snapshot) {
      console.log("Uploaded a thumb!", snapshot);
    })   
     // try {
    //   const snapshot = await newImage.put(superBuffer);
    //   const urls = await snapshot.ref.getDownloadURL();
    //   this.setState({
    //     url: this.state.url.concat(urls)
    //   });
    //   console.log(url);
    // } catch (err) {
    //   console.log(err);
    // }
    // console.log("hello");
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

  stopRecording = () => {
    this.setState({
      stopRecord: true
    });
  };

  preview = () => {
    if(this.state.preview===0){
    this.setState({
      preview: 1
    })
  }
  else{
    this.setState({
      preview: 0
    })
  };
  };

  startAnnotation=()=>{
    this.setState({
      startingAnnontations : true
    })
  }

  setBlob=(videoblob, thumb)=>{
    this.setState({
      blob: videoblob,
      thumbnail: [thumb]

    })
    console.log('thumbnail',thumb, videoblob)

  }

  resetBlob=()=>{
    this.setState({
      blob : null
    })
  }

  isRecord=()=>{
    this.setState({
      isRecording : !this.state.isRecording,
    })
  }

  
  reset=()=>{
    console.log('hira', this.state.func)
    if(this.state.func === 0){
this.setState({
  func : 1
})
    }
    else if(this.state.func===1){
  this.setState({
        func : 0
      }) 
    }
  }

  
  render() {
    return (
      <>
        <div className="player  ">
          <VideoRecorder
            onRecordingComplete={(
              videoblob,
              startedAt,
              thumbnailBlob,
              duration
            ) => {
              console.log(videoblob);
              console.log("thumb", thumbnailBlob);
              console.log(URL.createObjectURL(videoblob));
              this.setBlob(videoblob, thumbnailBlob)

              // const storageRef = firebase.storage().ref();
              // const ref = storageRef.child("test/test.mp4");

              // ref.put(videoblob).then(function(snapshot) {
              //   console.log("Uploaded a blob or file!", snapshot);
              // });
            }}
            isOnInitially={false}
          
            OnTurnOnCamera={
console.log('hiya')             
}
onTurnOnCamera={console.log('hiya1')             
}
onTurnOffCamera={console.log('hiya2')             
}
onStartRecording={()=> this.reset()         
}
onStopRecording={()=> this.reset()        
}
// onRecordingComplete={console.log('hiya4.5')             
// }
onOpenVideoInput={console.log('hiya5')             
}
onStopReplaying={console.log('hiya6')             
}
          />
          <div className="annotation" style={{opacity: `${this.state.preview}`}}>
             <SpeechRecognition name={'Daniel'} annotations={this.startAnnontations} />
             <StartAnontation   startAnnontations={this.state.func} name={'Daniel'} /> 
             {/* <StopAnontation annotationState={this.state.startingAnnontations}  func={this.handleReset} reset={this.state.func} name={'Daniel'} />  */}

          </div>

        </div>
        <div className='btnContainer'>
        <button className="btn1" onClick={this.stopRecording}>
      Submit         
 </button>
 <button onClick={this.preview} className="btn1">Preview Annotations</button>

       
          <div className="subcontainer">
          <div className="upload-btn-wrapper ">

          <button className="btn" onClick={this.stopRecording}>
            Upload a file
          </button>
          <input className="btn" style={{width: '100%', height: '100%'}}
            type="file"
            name="myfile"
            onChange={e => this.handleFileInput(e)}
            onClick={this.getFirebasetoken}
          />
        </div>
        </div>
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
        { 
          this.state.thumbnail.map((e,i)=>{
            console.log('test',e)
            const objectURL = URL.createObjectURL(e);
              console.log('url',objectURL)
            return <img src={objectURL} key={i}></img>

          })}
      </>
    );
  }
}

export default Video;
