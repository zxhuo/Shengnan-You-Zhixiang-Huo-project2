import React from 'react';
import { useGameContext } from '../../contexts/GameProvider';
import Letter from "./Letter";

function Board() {
    let {row, col} = useGameContext();
    const colNum = Array.from(Array(null, col).keys());
    const rowNum = Array.from(Array(null,row).keys());
 
  return (
      <div className='board'>
        {rowNum.map(r =>
            <div className="row" key={r}>{colNum.map(c =>
                <Letter letterPos={c} attemptVal={r} />
                    )}</div>
        )}
    </div>
  )
}

export default Board