import firebase from "../firebase";
import { Player } from "video-react";
import React from "react";
import "./video.css";
import VideoRecorder from "react-video-recorder";
import serviceWorker from "../services/services"
import PropTypes from "prop-types";
import SpeechRecognition, { StartAnontation, StopAnontation} from "./annotation";
const uuid = require('uuid/v1')

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startingAnnontations: false,
      blob: null,
      url: '',
      urls:[],
      thumbnails:[],
      thumbnail: '',
      stopRecord: false,
      isRecording: false,
      preview: 0,
      func: 0,
      categoryList:[],
      description:'',
      title:''
    };
    this.videoPlayer = React.createRef();
  }

componentDidMount(){
  serviceWorker.getAllCategories().then(response=>{
    console.log('video',response)
    this.setState({
      categoryList : (this.state.categoryList || []).concat(response.data.data)

    }, ()=>console.log(this.state))
  })
  
}

submit = () => {
  console.log('fire')
  this.handleFileStream()
};

  handleFileStream = async e => {
console.log('check')
    if(!this.state.blob) return;

    const root = firebase.storage().ref();
    
    const videoUrl = root.child(`userVideos/${uuid()}`);
    const thumbUrl = root.child(`userThumbnail/${uuid()}`);

    console.log('testblob', this.state.blob)
    // const snapshot = ref.put(this.state.blob).then(function(snapshot) {
    //   console.log("Uploaded a blob or file!", snapshot);
    // })

    // const thumbnail = ref1.put(this.state.thumbnail).then(function(snapshot) {
    //   console.log("Uploaded a thumb!", snapshot);
    // })   
     try {
      const movie = await videoUrl.put(this.state.blob)
      const movieUrl = await movie.ref.getDownloadURL();
      const thumbnailUrl = await thumbUrl.ref.getDownloadURL();
      console.log('urls',thumbnailUrl, movieUrl)
      this.setState({
        url: movieUrl,
        thumbail : thumbnailUrl
      });
      // console.log(url);
    } catch (err) {
      console.log(err);
    }
    console.log(this.state.description, this.state.title)

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

  handleDescription=(e)=>{
      console.log(e.currentTarget.value)
      this.setState({
        description : e.currentTarget.value
      })

  }


  handleTitle=(e)=>{
    console.log(e.currentTarget.value)
    this.setState({
      title : e.currentTarget.value
    })

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
        <button className="btn1" onClick={this.submit}>
      Submit         
 </button>
 <button onClick={this.preview} className="btn1">Preview Annotations</button>

       
          <div className="subcontainer">
          <div className="upload-btn-wrapper ">

          <button className="btn" onClick={this.stopRecording}>
            Upload File
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
     <div className='inputField'>{'Tile'}</div>
     <div className="inputField"><input onChange={(e)=>this.handleTitle(e)}></input></div>
     
     <div className='inputField'>{'Description'}</div>
     <div className="inputField"><input onChange={(e)=>this.handleDescription(e)}></input></div>


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
          this.state.thumbnails.map((e,i)=>{
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
