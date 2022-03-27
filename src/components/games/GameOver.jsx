import React, { useContext } from "react";
import { useGameContext } from '../../contexts/GameProvider'

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useGameContext;
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "Congradulations! You win. Would yu want another game?"
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}

export default GameOver;