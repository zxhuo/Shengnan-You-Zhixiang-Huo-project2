import React from 'react'
import React, { useContext } from "react";
import { AppContext } from "../App";
import Letter from "./Letter";

function Board({ len: row, attempt: col }) {
    const a
 
  return (
      <div className='board'>
          <div className="row">
        <Letter letterPos={0} attemptVal={0} />
        <Letter letterPos={1} attemptVal={0} />
        <Letter letterPos={2} attemptVal={0} />
        <Letter letterPos={3} attemptVal={0} />
        <Letter letterPos={4} attemptVal={0} />
        {rowNum.map(r =>
                    <div key={r}>{colNum.map}</div>
        )}
      </div>
    </div>
  )
}

export default Board