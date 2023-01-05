import React from 'react'
import SquareComponent from '../SquareComponent/SquareComponent';
import "./boardComponent.css";

const BoardComponent = () => {
  return (
    <div className="board__conti">
      <div className="row">
        <SquareComponent />
        <SquareComponent />
        <SquareComponent />
      </div>
      <div className="row">
        <SquareComponent />
        <SquareComponent />
        <SquareComponent />
      </div>
      <div className="row">
        <SquareComponent />
        <SquareComponent />
        <SquareComponent />
      </div>
    </div>
  );
}

export default BoardComponent