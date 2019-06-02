import React from "react";
import "../containers/style/trial.css";

const ShowReplies = ({ url }) => {
  return (
    <video className="mycard replies" controls>
      <source src={url} />
    </video>
  );
};

export default ShowReplies;
