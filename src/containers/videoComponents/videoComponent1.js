import React from "react";
import "../style/single.css";
import { useSpring, animated, useTransition } from "react-spring";

const LeftPanel = () => {
  const props = useSpring({
    from: { opacity: 0, color: "red" },
    to: { opacity: 1, color: "blue" }
  });
  return (
    <animated.div style={props}>
      <div style={leftPanelStyle}>
        <div>
          <video controls style={{ width: "100%" }}>
            <source src="https://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=57cd456c-b689-4a4f-8426-863eba9baa0dhttps://firebasestorage.googleapis.com/v0/b/rypl-acf62.appspot.com/o/vids%2F%5Bobject%20Blob%5D?alt=media&token=ef00bea4-b2c2-48d8-9666-1f6e8aba80ad" />
          </video>
          <div>
            <h3>Title: Dan Testing</h3>
          </div>
          <div>
            <p>Annotatation lives here</p>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

const leftPanelStyle = {
  width: "50%",
  backgroundColor: "#f6f6f6",
  display: "flex",
  justifyContent: "center"
};

export default LeftPanel;
