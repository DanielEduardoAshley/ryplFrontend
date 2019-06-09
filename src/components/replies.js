import React from "react";
import CardColor from "../services/cardColor";

const ShowReplies = ({ url, colorIdx }) => {
  return (
    <video
      className="mycard replies"
      controls
      style={{ backgroundColor: CardColor[colorIdx % 10] }}
    >
      <source src={url} />
    </video>
  );
};

export default ShowReplies;
