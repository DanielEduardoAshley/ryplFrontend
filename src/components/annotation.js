import React from "react";
import PropTypes from "prop-types";
// import SpeechRecognition from "react-speech-recognition";
import { withRouter } from "react-router-dom";
// const SpeechRecognitions = webkitSpeechRecognition;
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition)();

recognition.continuous = true
recognition.interimResults = true
recognition.lang = 'en-US'


class Annotations extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      listen: this.props.func,
      transcript: ""
    };
  }
  
  handleListen=()=>{

    console.log('listening?', this.state.listening)

    if (this.state.listening) {
      recognition.start()
      recognition.onend = () => {
        console.log("...continue listening...")
        recognition.start()
      }

    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("Stopped listening per click")
      }
    }

    recognition.onstart = () => {
      console.log("Listening!")
    }

    let finalTranscript = ''
    let interimTranscript = ''

    recognition.onresult = event => {

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
  
    }
    this.setState({
      transcript: finalTranscript,
      interim: interimTranscript
    })
  }
  
  render(){

    return(

<>

{this.state.transcript?this.state.transcript:this.state.interimTranscript}</>
    
    )
  }
};

//   render() {
//     return (

//       <>
//         <button onClick={this.start}>Annotation</button>
//         <button onClick={this.stop}>StopAnnotation</button>

//         <div>{this.state.results}</div>
//       </>
//     );
//   }
// }

export default Annotations;
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
