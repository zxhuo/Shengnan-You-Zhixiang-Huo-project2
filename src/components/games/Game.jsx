import React, { useState } from 'react'
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWordSet } from "./Words";
import React, { useState, createContext, useEffect } from "react";
import GameOver from "./components/GameOver";



multiplyNode(document.querySelector('.box'), 5, true);
function Game() {
    let { level } = useParams();
    const [board, setBoard] = useState(boardDefault);

    if (level == 'hard') {
        setBoard()
    }
    return (
        <div className="game ui container">
          <AppContext.Provider
            value={{
              board,
              setBoard,
              currAttempt,
              setCurrAttempt,
              correctWord,
              onSelectLetter,
              onDelete,
              onEnter,
              setDisabledLetters,
              disabledLetters,
              gameOver,
            }}
          >
              <Board />
              {gameOver.gameOver ? <GameOver /> : <Keyboard />}
          </AppContext.Provider>
        </div>
      );
}

export default Game;