import React from "react";
import SquareComponent from "../SquareComponent/SquareComponent";
import "./boardComponent.css";

const BoardComponent = () => {
  const [squareValue, setSquareValue] = React.useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = React.useState(true);

  const checkWinningPlayer = () => {
    const findWinnerData = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let winnerPattern of findWinnerData) {
      const [a, b, c] = winnerPattern;
      if (
        squareValue[a] === squareValue[b] &&
        squareValue[a] === squareValue[c] &&
        squareValue[a] !== null
      ) {
        return squareValue[a];
      }
    }

    return false;
  };
  const resetGame = () => {
    setSquareValue(Array(9).fill(null));
  };

  const handleClick = (i) => {
    if (squareValue[i] !== null) {
      return;
    }
    const allSquareValue = [...squareValue];
    allSquareValue[i] = currentPlayer ? "X" : "O";
    setSquareValue(allSquareValue);
    setCurrentPlayer(!currentPlayer);
  };
  const findWinner = checkWinningPlayer();
  React.useEffect(() => {
    if (findWinner) {
      resetGame();
      alert(`Congrats! ${findWinner} won`);
      setCurrentPlayer(true);
    }
  }, [squareValue]);

  return (
    <div className="board__conti">
      <div className="row">
        <SquareComponent val={squareValue[0]} onClick={() => handleClick(0)} />
        <SquareComponent val={squareValue[1]} onClick={() => handleClick(1)} />
        <SquareComponent val={squareValue[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <SquareComponent val={squareValue[3]} onClick={() => handleClick(3)} />
        <SquareComponent val={squareValue[4]} onClick={() => handleClick(4)} />
        <SquareComponent val={squareValue[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <SquareComponent val={squareValue[6]} onClick={() => handleClick(6)} />
        <SquareComponent val={squareValue[7]} onClick={() => handleClick(7)} />
        <SquareComponent val={squareValue[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default BoardComponent;
