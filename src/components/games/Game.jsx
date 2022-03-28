import React from 'react';
import Board from "./Board";
import Keyboard from "./Keyboard";
import GameOver from "./GameOver";

import { useGameContext } from '../../contexts/GameProvider'

function Game() {

    const { gameOver } = useGameContext();
    
    return (
        <div className="game ui container">      
               <Board />
               {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      );
}

export default Game;