import React from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
// const SpeechRecognitions = webkitSpeechRecognition;
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition)();

// recognition.continuous = true;
// recognition.interimResults = true;
// recognition.lang = "en-US";

// class Annotations extends React.Component {
//   constructor(props) {
//     super(props);
    
//       recognition.onresult = this.updateTranscript.bind(this)
//       // recognition.onend = this.onRecognitionDisconnect.bind(this)
    

//     this.state = {
//       interimResults: '',
//       finalTranscript: '',
//      final: this.variable,
//      listening : false,

//   }
//   }
// recording ={
//   final:''
// }
// listening = false;

//  final_transcript = '';
//  interim_transcripts ='' 

// componentDidMount(){
//   console.log(localStorage.getItem('transcript'))
// }
 


//   startButton=(event)=> {
//   console.log('listening')
//     this.listening=false
//   if(this.listening===false){
//   recognition.start();

//   }
//   recognition.onend= function(event){

//     if(this.listening ===true)
//     recognition.start()

//   }
  

//   }
  
  
//   updateTranscript=(event)=>{
//     recognition.onresult= function(event){
//     for (let i = event.resultIndex; i < event.results.length; ++i) {
//       if (event.results[i].isFinal) {
//         this.final_transcript += event.results[i][0].transcript;
//       }else{
//         this.interimResults = this.interimResults + event.results[i][0].transcript;
  
//         }
//         localStorage.setItem('transcript', this.final_transcript)
       
//           this.finally += this.final_transcript
//     } 
//     console.log('123',this.final_transcript)
    
//   }
//   this.setState({ 
//     finalTranscript :this.final_transcript, 
//     interimTranscripts: this.interim_transcript 
//   }, ()=>console.log(this.state))
//   }
    
   

   
    

  
  
  
  

  

  

//   stopButton=()=>{
//     recognition.stop()
//     this.listening=true

//     recognition.onend = function(event){
//       console.log('final',localStorage.getItem('transcript'))
//       console.log('finally!!',this.finally)
      

//     }
//   }
 
 


//   render() {
//     console.log('set', this.props)
//     if(this.props.recording===1 && this.listening===false){
    
//         this.startButton()
//        console.log('state and props', this.state, this.props, this.recording.final) 
  
      {/* <button onClick={this.startButton}>button</button> */}
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

      
//     }else{
//       this.stopButton()
//     }
//     console.log('ftrans',this.final_transcript)
//     const transcript = this.final_transcript
    
//     return (
//       <>
//         <div>
//         {transcript}
//       </div>      </>
//     );
//   }
// }

// //   render() {
// //     return (

// //       <>
// //         <button onClick={this.start}>Annotation</button>
// //         <button onClick={this.stop}>StopAnnotation</button>

// //         <div>{this.state.results}</div>
// //       </>
// //     );
// //   }
// // }

// export default Annotations;
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

// // import React from "react";
// // import PropTypes from "prop-types";
// // import SpeechRecognition from "react-speech-recognition";
// // import { withRouter } from "react-router-dom";

// // // const propTypes = {
// // //   // Props injected by SpeechRecognition
// // //   transcript: PropTypes.string,
// // //   resetTranscript: PropTypes.func,
// // //   browserSupportsSpeechRecognition: PropTypes.bool,
// // //   stopListening: PropTypes.func
// // // };
// // const options = {
// //   // autoStart: false,
// //   // listening: false,
// // };

// // export const StartAnontation = props => {
// //   console.log("testingAnnon", props);
// //   options.listening = !options.autoStart
// //   console.log('options',options)
// //   return null
// // };

// // class Dictaphone extends React.Component{
// //   constructor(props){
// //     super(props)
// //     this.propTypes={transcript: PropTypes.string,
// //       resetTranscript: PropTypes.func,
// //       browserSupportsSpeechRecognition: PropTypes.bool,
// //       stopListening: PropTypes.func}
// //     }

// // render(){
// //   return(
// //     <div>{propTypes.transcript}</div>
// //   )
// // }
// // }
