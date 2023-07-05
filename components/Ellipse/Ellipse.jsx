import React from "react";
import "./ellipse.css";

export default function Ellipse({ background, size, zIndex, top, left }) {
  const ellipseStyle = {
    background,
    width: size,
    height: size,
  };
  const ellipsesBoxStyles = {
    zIndex,
    top: `${top}%`,
    left: `${left}%`
  }

  return (
    <div className="box" style={ellipsesBoxStyles}>
      <div className="ellipse-wrapper">
        <div className="ellipse" style={ellipseStyle} />
      </div>
    </div>
  )
}


