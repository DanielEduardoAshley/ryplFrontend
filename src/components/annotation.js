import React from "react";
import PropTypes from "prop-types";
// import SpeechRecognition from "react-speech-recognition";
import { withRouter } from "react-router-dom";
// const SpeechRecognitions = webkitSpeechRecognition;

class Annotation extends React.Component {
  constructor(props) {
    super(props);
    this.recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition)();

    this.state = {
      listen: true,
      results: ""
    };
  }

  start = () => {
    this.recognition.lang = "en-US";
    this.recognition.start();
  };

  stop = () => {
    this.recognition.stop();
    console.log(this.state.results);
  };

  display = e => {
    return (this.recognition.onresult = (function(e) {
      if (!e) return null;
      const result = e.results[e.results.length - 1][0].transcript;
      console.log("result: ", result);

      let final_transcript = "";
      let interim_transcript = "";
      for (var i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) {
          final_transcript += e.results[i][0].transcript;
        } else {
          interim_transcript += e.results[i][0].transcript;
        }

        console.log("final", final_transcript);
        this.setState({
          results: final_transcript
        });
      }
    })());
  };

  render() {
    return (
      <>
        <button onClick={this.start}>Annotation</button>
        <button onClick={this.stop}>StopAnnotation</button>

        <div>{this.state.results}</div>
      </>
    );
  }
}

export default Annotation;
// const propTypes = {
//   // Props injected by SpeechRecognition
//   transcript: PropTypes.string,
//   resetTranscript: PropTypes.func,
//   browserSupportsSpeechRecognition: PropTypes.bool
// };

// console.log('propTypes.trans',propTypes.transcript)

// const handle={
//   func : null,
// }

// const options = {

// };

// export const StartAnontation = props => {
//     handle.func = props.startAnnontations
//     return null
//   }

// let svg = ''

// const Dictaphone = ({
//   stopListening,
//   finalTranscript,
//   transcript,
//   resetTranscript,
//   browserSupportsSpeechRecognition,
//   startListening,
//   abortListening,

// }) => {

// const handleTranscript=(e)=>{
// console.log(e.currentTarget.value)
// }

//   if (!browserSupportsSpeechRecognition) {
//     return null;
//   }
//   console.log('gg',handle.func)
//   let arr = []
//   let arrTwo = []
//   let strings = ''

//   console.log('test', `${transcript} ${transcript}`)

//   if(handle.func===1){
//      arr.push(transcript)

//      arrTwo = [...arr]
// svg = transcript
// console.log('ejgdkdd,mf',svg)
//     return (
//       <div>
//         <button onClick={resetTranscript}>Reset</button>

//         <span style={{ fontSize: "20px" }}><input type='text' onChange={(e)=>handleTranscript(e)} value={`${transcript}`}></input></span>

//       </div>)
//   }
//   else if(handle.func===0){
//     console.log('turned off', arrTwo)

//    return( <div>
//         <button onClick={resetTranscript}>Reset</button>
//         <span style={{ fontSize: "20px" }}>{arrTwo}</span>

//   </div>)
//   }

//   return null
//     ;
// }
// ;

// Dictaphone.propTypes = propTypes;

// export default SpeechRecognition(options)(Dictaphone);

// import React from "react";
// import PropTypes from "prop-types";
// import SpeechRecognition from "react-speech-recognition";
// import { withRouter } from "react-router-dom";

// // const propTypes = {
// //   // Props injected by SpeechRecognition
// //   transcript: PropTypes.string,
// //   resetTranscript: PropTypes.func,
// //   browserSupportsSpeechRecognition: PropTypes.bool,
// //   stopListening: PropTypes.func
// // };
// const options = {
//   // autoStart: false,
//   // listening: false,
// };

// export const StartAnontation = props => {
//   console.log("testingAnnon", props);
//   options.listening = !options.autoStart
//   console.log('options',options)
//   return null
// };

// class Dictaphone extends React.Component{
//   constructor(props){
//     super(props)
//     this.propTypes={transcript: PropTypes.string,
//       resetTranscript: PropTypes.func,
//       browserSupportsSpeechRecognition: PropTypes.bool,
//       stopListening: PropTypes.func}
//     }

// render(){
//   return(
//     <div>{propTypes.transcript}</div>
//   )
// }
// }

// const Dictaphone = ({
//   transcript,
//   resetTranscript,
//   browserSupportsSpeechRecognition,
//   startListening,
//   // stopListening,
//   abortListening
// }) => {
//   console.log(startListening)
//   // abortListening()
//   // startListening()
//   // stopListening()
//   if (!browserSupportsSpeechRecognition) {
//     return null;
//   }
//   return (
//     <div>
//       {/* {props.reset? resetTranscript: null} */}
//       <button onClick={resetTranscript}>Reset</button>

//       <span style={{ fontSize: "20px" }}>{transcript}</span>
//     </div>
//   );
// };

// export default SpeechRecognition(options)(Dictaphone);
