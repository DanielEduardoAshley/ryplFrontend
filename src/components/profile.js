import React from "react";
import { Player } from "video-react";


class Profile extends React.Component {

    state={
        originalVideos : [],
        reactionVideos : [],
    }
  
  componentDidMount(){

    }

  render() {
      return(
          <>
          <div>Hello World</div>
          {this.state.originalVideos.map((e, i) => {
          return (
            <Player
              playsInline
              poster="https://bostoncrusaders.org/wp-content/uploads/2014/12/kid-sad-face-new-york-1r6di21.jpg"
              src={`${e}`}
            key={i}/>
          );
        })}

         {this.state.reactionVideos.map((e, i) => {
          return (
            <Player
              playsInline
              poster="https://bostoncrusaders.org/wp-content/uploads/2014/12/kid-sad-face-new-york-1r6di21.jpg"
              src={`${e}`}
              key={i}/>
          );
        })}
         </>
      )
  }
}

export default Profile;
