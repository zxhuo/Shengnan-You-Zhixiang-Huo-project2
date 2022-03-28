import React from 'react';
import { useGameContext } from '../../contexts/GameProvider';
import Letter from "./Letter";

function Board() {
    let {row, col} = useGameContext();
    const colNum = Array.from(Array(col).keys());
    const rowNum = Array.from(Array(row).keys());

    return (
        <div className="board">
            {rowNum.map(r =>
                <div className="row" >
                    {colNum.map((c) => <Letter letterPos={c} attemptVal={r}> </Letter>)}
                </div>
             )}
      </div>
  )
}

export default Board