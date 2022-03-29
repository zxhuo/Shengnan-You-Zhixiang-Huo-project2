import React from "react";
import { Button, Header, Icon, Segment, Comment } from 'semantic-ui-react'
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
                ? <h3>Congradulations! You win.</h3>
                : <h1>Sorry! You Failed to Guess the Word</h1>}
      </h1>
    <Comment>
        <Comment.Content>
          <Comment.Metadata>
          <span>Correct Word: {correctWord}</span>
           </Comment.Metadata>
        <Comment.Text> 
        {gameOver.guessedWord && (
            <p>You guessed in {currAttempt.attempt} attempts</p>
          )}
         </Comment.Text>
        </Comment.Content>
      </Comment>
        <Header>Would you like another round? </Header>  
        <Link className='ui button primary' to='/'>
                Play again
          </Link>
    </div>
  );
}

export default GameOver;