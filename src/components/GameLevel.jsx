import { useParams } from "react-router-dom";

import { GameProvider } from '../contexts/GameProvider'
import Game from "./games/Game";
function GameLevel() {
    let { level } = useParams();
    let len;
    let trytime;
    if (level === 'hard') {
        len = 7;
        trytime = 2;
    } else if (level === 'medium') {
        len = 6;
        trytime = 2;
    }else {
        len = 5;
        trytime = 2;
    }
    return (
            <GameProvider len={len} trytime={trytime} >
                <Game />
            </GameProvider>
      );
}

export default GameLevel;