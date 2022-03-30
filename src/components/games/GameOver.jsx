import React from "react";
import { Header , Comment } from 'semantic-ui-react'
import { useGameContext } from '../../contexts/GameProvider'
import {  Link } from 'react-router-dom';

function GameOver() {
  const {
    currAttempt,
    gameOver,
    correctWord,
  } = useGameContext();

  return (
    <div className="gameover">
      <h1>
       {gameOver.guessedWord
                ? <h1 className='win-pop'>You win.</h1>
                : <h1 className="lose-pop">You Failed!</h1>}
      </h1>
    <Comment>
        <Comment.Content>
          <Comment.Metadata>
          <h3>Correct Word: {correctWord}</h3>
           </Comment.Metadata>
        <Comment.Text> 
        {gameOver.guessedWord && (
            <h4>You guessed in {currAttempt.attempt} attempts</h4>
          )}
         </Comment.Text>
        </Comment.Content>
      </Comment>
        <Header>Would you like another round? </Header>  
        <Link className='ui button primary' to='/'>
                Play again!
          </Link>
    </div>
  );
}

export default GameOver;