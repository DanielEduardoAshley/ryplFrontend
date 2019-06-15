
import React, {Component} from 'react'
import Peer from 'simple-peer'
import {dataBaseFirebase} from '../firebase'

let id =  Math.floor(Math.random()*1000000000)
let servers = {'iceServers': [{'urls': 'stun:stun.services.mozilla.com'}, {'urls': 'stun:stun.l.google.com:19302'}, {'urls': 'turn:numb.viagenie.ca','credential': 'beaver','username': 'webrtc.websitebeaver@gmail.com'}]};
let pc1 = new RTCPeerConnection(servers);
let pc2 = new RTCPeerConnection(servers);
let pc = new RTCPeerConnection(servers);





class SimplePeer extends React.Component{
  constructor(props) {
    super(props)
    this.state={
        url : '',
    }

    this.database = dataBaseFirebase.database().ref();
    this.yourVideo = document.getElementById("yourVideo");
    this.friendsVideo = document.getElementById("friendsVideo");
//Create an account on Viagenie (http://numb.viagenie.ca/), and replace {'urls': 'turn:numb.viagenie.ca','credential': 'websitebeaver','username': 'websitebeaver@email.com'} with the information from your account
    
    
}
//Create an account on Firebase, and use the credentials they give you in place of the following

// id = {
//     yourid :  Math.floor(Math.random()*1000000000),

// }


 sendMessage(senderId, data) {
    var msg = this.database.push({ sender: senderId, message: data });
    console.log('msg',msg)
    msg.remove();
}

  readMessage(data) {
   
    var msg =  JSON.parse(data.val().message);
    console.log(msg)
    var sender = data.val().sender;
    // const idCheck = this.id.yourId
    if (sender !== id) {
        if (msg.ice != undefined)
            pc.addIceCandidate(new RTCIceCandidate(msg.ice));
        else if (msg.sdp.type == "offer")
            pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
              .then(() => pc.createAnswer())
              .then(answer => pc.setLocalDescription(answer))
              .then(() => this.sendMessage(id, JSON.stringify({'sdp': pc.localDescription})));
        else if (msg.sdp.type == "answer")
            pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
    }
};





showFriendsFace=()=> {
  pc.createOffer()
    .then(offer => pc.setLocalDescription(offer) )
    .then(() => this.sendMessage(id, JSON.stringify({'sdp': pc.localDescription})) );
    

}


componentDidMount(){
  navigator.mediaDevices.getUserMedia({audio:true, video:true})
    .then(stream => this.yourVideo.srcObject = stream)
    .then(stream => pc.addStream(stream));
    this.database.on('child_added', this.readMessage);

    
    pc.onicecandidate = (event => event.candidate?this.sendMessage(id, JSON.stringify({'ice': event.candidate})):console.log("Sent All Ice") );
    pc.onaddstream = (event => this.friendsVideo.srcObject = event.stream);
    
}
  render() {
      console.log('id',id)
    return (<>
        <video> <source src={`${this.state.url}`}></source></video>
        <button onClick={this.showFriendsFace}>Call</button>
        </>
    )
  }
}




// let pc1 = new RTCPeerConnection(), pc2 = new RTCPeerConnection(), stream, videoTrack, videoSender;


// class SimplePeer extends React.Component{
//     constructor(props) {
//       super(props)
//       this.state={
//           url : '',
//       }
//     }

// componentDidMount(){
// (async () => {
//   try {
//     stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
//     videoTrack = stream.getVideoTracks()[0];
//     pc1.addTrack(stream.getAudioTracks()[0], stream);
//   } catch (e) {
//     console.log(e);  
//   }
// })();
// }




// // pc2.ontrack = e => {
// //   video.srcObject = e.streams[0];
// //   e.track.onended = e => video.srcObject = video.srcObject; // Chrome/Firefox bug
// // }

// showFriendFace=()=>{
// pc1.onicecandidate = e => pc2.addIceCandidate(e.candidate);
// pc2.onicecandidate = e => pc1.addIceCandidate(e.candidate);
// pc1.onnegotiationneeded = async e => {
//   try {
//     await pc1.setLocalDescription(await pc1.createOffer());
//     await pc2.setRemoteDescription(pc1.localDescription);
//     await pc2.setLocalDescription(await pc2.createAnswer());
//     await pc1.setRemoteDescription(pc2.localDescription);
//   } catch (e) {
//     console.log(e);  
//   }
// }
// }

// // checkBox =()=> {
// //     if (checkbox.checked) {
// //       videoSender = pc1.addTrack(videoTrack, stream);
// //     } else {
// //       pc1.removeTrack(videoSender);
// //     }
// //   }

// render(){
//     return(<div>
//         hello
//     </div>)
// }
// }
export default SimplePeer

