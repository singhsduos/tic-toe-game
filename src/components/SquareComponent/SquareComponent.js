import React from "react";
import "./squareComponent.css"

const SquareComponent = (props) => {
  return (
    <div className="square__container" onClick={props.onClick}>
      <span>{props.val}</span>
    </div>
  );
};

export default SquareComponent;
