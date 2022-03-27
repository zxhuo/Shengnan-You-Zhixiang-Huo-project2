import React, {useParams} from 'react'
import Board from "./Board";
import Keyboard from "./Keyboard";
import GameOver from "./GameOver";

import { GameProvider,useGameContext } from '../../contexts/GameProvider'

function Game() {
    let { level } = useParams();
    let len;
    let trytime;
    const { gameOver }  = useGameContext();
    if (level === 'hard') {
        len = 7;
        trytime = 5;
    } else if (level === 'medium') {
        len = 6;
        trytime = 6;
    }else {
        len = 5;
        trytime = 7;
    }
    return (
        <div className="game ui container">
            <GameProvider len={len} try={trytime} >
               <Board />
               {gameOver.gameOver ? <GameOver /> : <Keyboard />}
            </GameProvider>
    
        </div>
      );
}

export default Game;