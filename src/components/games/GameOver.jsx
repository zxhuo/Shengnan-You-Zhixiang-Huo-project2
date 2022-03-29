import React from "react";
import { useGameContext } from '../../contexts/GameProvider'
import {  Link } from 'react-router-dom';

function GameOver() {
  const {
    currAttempt,
    gameOver,
    correctWord,
  } = useGameContext();

  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "Congradulations! You win."
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
      <Link className='item ui button' to='/'>
        Play again
      </Link>
    </div>
  );
}

export default GameOver;