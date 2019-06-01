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
const options = {
  // autoStart: false,
  // listening: false,
};

export const StartAnontation = props => {
  console.log("testingAnnon", props);
  options.listening = !options.autoStart
  console.log('options',options)
  return null
};


const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  startListening,
  stopListening,
  abortListening
}) => {
  console.log(startListening)
  // abortListening()
  // startListening()
  // stopListening()
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <div>
      {/* {props.reset? resetTranscript: null} */}
      <button onClick={resetTranscript}>Reset</button>

      <span style={{ fontSize: "20px" }}>{transcript}</span>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(options)(Dictaphone);
