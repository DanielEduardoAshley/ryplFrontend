import React from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import { withRouter } from "react-router-dom";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const handle={
  func : null,
}

const options = {
 
};

export const StartAnontation = props => {
    handle.func = props.startAnnontations
    return null
  }


const Dictaphone = ({
  stopListening,
  finalTranscript,
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  startListening,
  abortListening
}) => {
  

  
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  console.log('gg',handle.func)
  let string = ''
  if(handle.func===1){
    console.log(resetTranscript)
    return (
      <div>
        <button onClick={resetTranscript}>Reset</button>
  
        <span style={{ fontSize: "20px" }}>{transcript}</span>
        {string = transcript}
      </div>)
  }
  else if(handle.func===0){
    console.log('string',string)
   return( <div>
        <button onClick={resetTranscript}>Reset</button>
        

        <span style={{ fontSize: "20px" }}>{string}</span>

  </div>)
  }
  
  return null
    ;  
}
;

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(options)(Dictaphone);



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
