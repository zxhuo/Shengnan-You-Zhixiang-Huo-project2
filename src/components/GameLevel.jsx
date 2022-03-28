import { useParams } from "react-router-dom";

import { GameProvider } from '../contexts/GameProvider'
import Game from "./games/Game";
function GameLevel() {
    let { level } = useParams();
    let len;
    let trytime;
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
            <GameProvider len={len} trytime={trytime} >
                <Game />
            </GameProvider>
      );
}

export default GameLevel;