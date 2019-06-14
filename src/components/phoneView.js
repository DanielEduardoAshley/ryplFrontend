
import React, {Component} from 'react'
import Peer from 'simple-peer'
import {dataBaseFirebase} from '../firebase'

let id =  Math.floor(Math.random()*1000000000)
let servers = {'iceServers': [{'urls': 'stun:stun.services.mozilla.com'}, {'urls': 'stun:stun.l.google.com:19302'}, {'urls': 'turn:numb.viagenie.ca','credential': 'beaver','username': 'webrtc.websitebeaver@gmail.com'}]};
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
    console.log(msg)
    msg.remove();
}

  readMessage(data) {
   
    var msg =  JSON.parse(data.val().message);
    console.log(msg)
    var sender = data.val().sender;
    // const idCheck = this.id.yourId
    if (sender != id) {
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

export default SimplePeer

//     state={
//         chosenId : null,
//         peerOne : 0,
//         peerTwo : 0,
//         answerStream  : 'https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/IMG_1957.webm?alt=media&token=1ca7c2cb-d582-4854-873c-10f48c4c3484',
//         callStream : 'https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/IMG_1957.webm?alt=media&token=1ca7c2cb-d582-4854-873c-10f48c4c3484'
//     }
    
//     choosePeerOneId=()=>{
//         const peerOne = new Peer('02151999'); 
 
//         this.setState({
//             chosenId : peerOne,
//             peerOne : peerOne
//         })
//     }
//     choosePeerTwoId=()=>{
//         const peerTwo = new Peer('02261999'); 

//         this.setState({
//             chosenId: peerTwo,
//             peerTwo : peerTwo
//         })
//     }

//     connectToPeerTwo=()=>{
//         console.log('tyr')
//         if(this.state.chosenId === this.state.peerOne){
//             var peerOne = new Peer('02151999')
//         var conn = peerOne.connect(this.state.peerTwo);
//         conn.on('open', (id) => {
//             console.log('here')

//             conn.send('hi!');
// });
//         }else if(this.state.chosenId === this.state.peerTwo){
//             var peerTwo = new Peer('02261999')
//         var conn = peerTwo.connect('02151999');
//         // const conn = peerTwo.connect(this.state.peerOne);
//         conn.on('open', () => {
//             conn.send('hi!');
// });
//         }

//         this.state.chosenId.on('connection', (conn) => {
//             conn.on('data', (data) => {
//               // Will print 'hi!'
//               console.log(data);
//             });
//           });
   
//     }

//     receiveFromPeerTwo=()=>{
//         this.state.chosenId.on('connection', (conn) => {
//             conn.on('data', (data) => {
//               // Will print 'hi!'
//               console.log(data);
//             });
//           });
//     }

//     call=()=>{
//         if(this.state.chosenId === this.state.peerOne){
//         navigator.mediaDevices.getUserMedia({video: true, audio: true}, (stream) => {
//             console.log('firstattpemt')

//             const call = this.state.chosenId.call(this.state.peerTwo, stream);
//             this.setState({
//                 callStream : stream
//             })
//             call.on('stream', (remoteStream) => {
//               // Show stream in some <video> element.
//               console.log(remoteStream)
             

//             });
//           }, (err) => {
//             console.error('Failed to get local stream', err);
//           });
//         }else if(this.state.chosenId === this.state.peerTwo){
//         navigator.mediaDevices.getUserMedia({video: true, audio: true}, (stream) => {
//             const call = this.state.chosenId.call(this.state.peerOne, stream);
//             this.setState({
//                 callStream : stream
//             })
//             call.on('stream', (remoteStream) => {
//               // Show stream in some <video> element.
//               console.log(remoteStream)


//             });
//           }, (err) => {
//             console.error('Failed to get local stream', err);
//           });
//     }
// }

//     answer=()=>{
//         this.state.chosenId.on('call', (call) => {
//             navigator.mediaDevices.getUserMedia({video: true, audio: true}, (stream) => {
//               call.answer(stream); // Answer the call with an A/V stream.
//               this.setState({
//                 answerStream : stream
//             })
//               call.on('stream', (remoteStream) => {
//                 // Show stream in some <video> element.
               
//               });
//             }, (err) => {
//               console.error('Failed to get local stream', err);
//             });
//           });
//     }

// connect=()=>{
//     const peer = new Peer(); 
//     console.log(peer)
//     const conn = peer.connect('02261999');
// conn.on('open', () => {
//     console.log('daniel')
//   conn.send('hi!');
// });
// // const peer = new Peer(); 
// console.log(peer)
// // const conn = peer.connect('02261999');
// peer.on('connection', (conn) => {
//     conn.on('data', (data) => {
//       // Will print 'hi!'
//       console.log('made it')
//       console.log('data',data);
//     });
//   });


// }

// receive=()=>{
//     const peer = new Peer(); 
//     console.log(peer)
//     const conn = peer.connect('02261999');
//     peer.on('connection', (conn) => {
//         conn.on('data', (data) => {
//           // Will print 'hi!'
//           console.log('made it')
//           console.log('data',data);
//         });
//       });
    
// }

// get video/voice stream
// connect=()=>{
// navigator.getUserMedia({ video: true, audio: true }, gotMedia, () => {})

// function gotMedia (stream) {
//   var peer1 = new Peer({ initiator: true, stream: stream })
//   var peer2 = new Peer({stream: stream})

//   peer1.on('signal', data => {
//     peer2.signal(data)
//   })

//   peer2.on('signal', data => {
//     peer1.signal(data)
//   })

//   peer2.on('stream', stream => {
//     // got remote video stream, now let's show it in a video tag
//     var video = document.querySelector('video')
    
//     if ('srcObject' in video) {
//       video.srcObject = stream
//     } else {
//       video.src = window.URL.createObjectURL(stream) // for older browsers
//     }
    
//     video.play()
//   })
// // }
// // }
//     render(){
//         console.log(this.state.chosenId)
//         return(<>
//          <button onClick={this.choosePeerOneId}>Peer One</button>
//          <button onClick={this.choosePeerTwoId}>Peer Two</button>
//          <button onClick={this.connect}>Connect</button>
//          <button onClick={this.initializeOne}>ConnectOne</button>

//          <button onClick={this.receive}>Receive</button>
//          <button onClick={this.call}>Call</button>
//          <button onClick={this.answer}>Answer</button>
//          <video source src={`${this.state.callStream}`} controls height='300' width='400'></video>
//          <video source src={`${this.state.answerStream}`} controls height='300' width='400'></video>



//         </>)
//     }
// }

// export default WebRTCPeerConnection
// export default function Media(){
//     const config ={
//         'iceServers':[{
//             'urls': ['stun:stun.1.google.com:19302']
//         }]
//     }
// const peerConnection = new RTCPeerConnection(config)
// peerConnection.onicecandidate = (event)=>{
//     if(event.icecandidate){
//         socket.emit('candidate',event.candidate)
//     }
// }

// socket.on('candidate', (candidate)=>{
//     const c = new RTCIceCandidate(candidate)
//     peerConnection.addIceCandidate(c)

// })
// navigator.mediaDevices.getUserMedia({
//     audio: true,
//     video : true,
// })
// .then((stream)=>{
//     peerConnection.addStream(stream)
//     peerConnection.createOffer()
//     .then(sdp=>{
//         peerConnection.setLocalDescription(sdp)
//         console.log(sdp)
//     })
//     .then(()=>{
//     //   socket.emit('offer', peerConnection.setLocalDescription)
//     })

//     socket.on('answer', (message)=> peerConnection.setLocalDescription(message))
// })
// return null
// }


// const peerConnection = new RTCPeerConnection()
// socket.on('offer', (message)=>{
//     peerConnection.setRemoteDescription(message)
//     .then(()=>peerConnection.createAnswer())
//     .then((sdp)=>peerConnection.setLocalDescription(sdp))
//     .then(()=>{
//         socket.emit('answer', peerConnection.localDescription)
//     })
// })

// peerConnection.onaddstream = ()=>{
//     video.srcobject = event.stream
// }