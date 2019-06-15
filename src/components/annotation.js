// import React from "react";
// import PropTypes from "prop-types";
// import SpeechRecognition from "react-speech-recognition";

// const propTypes = {
//   // Props injected by SpeechRecognition
//   transcript: PropTypes.string,
//   resetTranscript: PropTypes.func,
//   browserSupportsSpeechRecognition: PropTypes.bool
// };

// console.log('propTypes.trans',propTypes.transcript)

// const handle={
//   func : null,
//   annotation: ''
// }



// export const StartAnontation = props => {
//     handle.func = props.recording
//     console.log(props)
//     return null
//   }


// const Dictaphone = ({
//   stopListening,
//   finalTranscript,
//   transcript,
//   resetTranscript,
//   browserSupportsSpeechRecognition,
//   startListening,
//   abortListening,

// }) => {

  

//   if (!browserSupportsSpeechRecognition) {
//     return null;
//   }
//   console.log('gg',handle.func, )
  
  

//   console.log('test', ` ${transcript}`)

//   if(handle.func===1){
//     // startListening()
//     // recognition.start()
//     console.log('local')
//     localStorage.setItem('trans', transcript)
//     return (
    
//       <>  
//         <button onClick={resetTranscript}>Reset</button>
//         <div style={{width: '300px', height: '300px'}}>{transcript}</div>


//       </>)
//   }
//   else if(handle.func===0){
       
//         return(<><div></div> 
//         </>)
//         }

//   return null
//     ;
// }
// ;

// Dictaphone.propTypes = propTypes;

// export default SpeechRecognition(propTypes)(Dictaphone);

