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
    return (
      this.recognition.onresult = (function(e) {
      if (!e) return null;
      const result = e.results[e.results.length - 1][0].transcript;

      console.log('result: ', result);
    


let final_transcript = '' 
let interim_transcript = ''
for (var i = e.resultIndex; i < e.results.length; i++) {
  if (e.results[i].isFinal) {
    final_transcript += e.results[i][0].transcript;
  } else {
    interim_transcript += e.results[i][0].transcript;
  }
  
  console.log('final',final_transcript)
  this.setState({
    results : final_transcript
  })
  }
})
  
    )}
  
  
  render(){

    return(

<></>
    
    )
  }
};


export default Annotation;

