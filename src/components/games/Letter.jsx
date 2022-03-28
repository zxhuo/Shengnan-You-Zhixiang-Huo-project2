import React, {  useEffect } from "react";
import { useGameContext } from "../../contexts/GameProvider";
import '../../App.css'
function Letter({ letterPos, attemptVal }) {
  const {
    board,
    currAttempt,
    correctWord,
    setDisabledLetters,
  } = useGameContext();

  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  const letterState =
  currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");
  
  useEffect(() => {
    
    if (letter !== "" && !correct && !almost) {
      console.log(letter + " letter in useEffect");
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;