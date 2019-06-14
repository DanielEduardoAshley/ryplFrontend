import React from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
// const SpeechRecognitions = webkitSpeechRecognition;
// const recognition = new (window.SpeechRecognition ||
//   window.webkitSpeechRecognition ||
//   window.mozSpeechRecognition ||
//   window.msSpeechRecognition)();

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

console.log('propTypes.trans',propTypes.transcript)

const handle={
  func : null,
  recording : false
}



export const StartAnontation = props => {
    handle.func = props.startAnnotations
    console.log(props)
    return null
  }


const Dictaphone = ({
  stopListening,
  finalTranscript,
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  startListening,
  abortListening,

}) => {

  

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  console.log('gg',handle.func, )
  
  

  console.log('test', ` ${transcript}`)

  if(handle.func===1){
    // startListening()
    // recognition.start()
  
    localStorage.setItem('trans', transcript)
    return (
    
      <>  
        <button onClick={resetTranscript}>Reset</button>
        <div style={{width: '100', heigth: '100'}}>{transcript}</div>


      </>)
  }
  else if(handle.func===0){
       
        handle.recording = false
        return(<><div></div> 
        </>)
        }

  return null
    ;
}
;

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(propTypes)(Dictaphone);

