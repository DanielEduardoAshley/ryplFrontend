import React from "react";
import PropTypes from "prop-types";
// import SpeechRecognition from "react-speech-recognition";
import { withRouter } from "react-router-dom";
// const SpeechRecognitions = webkitSpeechRecognition;
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition)();

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-US";

class Annotations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interimResults: '',
      final_transcript: '',
     final: this.variable
  }
  }
recording ={
  recording : this.props.recording,
  final:''
}

componentDidMount(){
  console.log(localStorage.getItem('transcript'))
}
 
variable=''
testThree=(trans)=>{
  console.log('trans', trans)
  this.variable = trans
  console.log('var',this.variable)
  return trans
}

  startButton=(event)=> {
  console.log('listening')
  const testTwo=(trans)=>{
    console.log('here')
    this.testThree(trans)
  }
  
  recognition.start();
  const test=(trans)=>{
    console.log('gettingthere')
  testTwo(trans)
  }
  recognition.onresult = function(event) {
    let final_transcript = '';
    let interimResults ='' 
    
    this.testOne=(trans)=>{
      test(trans)
    }
    
    recognition.onend= function(event){
      recognition.start()

    }

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      }else{
        interimResults = interimResults + event.results[i][0].transcript;
  
        }
        localStorage.setItem('transcript', final_transcript)
        // this.setState=({ 
        //   final : final_transcript
        // })
        
    }  
    this.testOne(final_transcript)
    this.finally += final_transcript
    console.log('123',final_transcript)
  
  
  }
  

  }

  

  stopButton=()=>{
    recognition.stop()
    recognition.onend = function(event){
      console.log('final',localStorage.getItem('transcript'))
      console.log('finally!!',this.finally)
      

    }
  }
 
  test=()=>{
    this.setState({
      final: this.state.final + 1
    })
  }
;

  render() {
    console.log('set')
    // if(this.props.recording===1){
    //    this.recording.final = this.startButton()
    //    console.log('state and props', this.state, this.props, this.recording.final) 

      
    // }else{
    //   this.stopButton()
    // }
    // console.log(this.state)
    
    return (
      <>
      <div>{this.variable}</div>
      <button onClick={this.startButton}>button</button>
      </>
    );
  }
}

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
