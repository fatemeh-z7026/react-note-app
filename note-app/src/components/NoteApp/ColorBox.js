import React from "react";

export default function ColorBox(props) {

  return (
    <div
      className="color-box"
      style={{ backgroundColor: props.color ,
        border: "none",
      }}
      onClick={() => props.onColor(props.color)}
    ></div>
  );
}
