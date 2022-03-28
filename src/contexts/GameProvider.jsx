import React, { useState, createContext, useEffect, useContext } from "react";

import wordBankHard from "../wordle-bank-hard.txt";
import wordBankMedium from "../wordle-bank-medium.txt";
import wordBankEasy from "../wordle-bank-easy.txt";


export const GameContext = createContext();

export function useGameContext() {
  return useContext(GameContext);
} 

export function GameProvider({ len, trytime, children }) {
  
  const boardDefault = Array(trytime).fill(Array(len).fill(''));
  
  const [col, setCol] = useState(len);
  const [row, setRow] = useState(trytime);
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState(" ");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const setNewBoard = (board,key) => {
    console.log(board +" board");
    const newBoard = [];
    for (let r = 0; r< board.length; r++) {
      newBoard[r] = [...board[r]];
    }
    console.log(newBoard + " newboard");
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
  }

  const clearBoard = (cr) => {
    const newBoard = [];
    for (let r = 0; r < board.length; r++) {
      if (r == cr) {
        newBoard[r] = Array(col).fill('');
        console.log("clear")
        continue;
      }
      newBoard[r] = [...board[r]];
    }
    setBoard(newBoard);
  }

  useEffect(() => {
    const generateWordSet = async () => {
      let wordSet;
      let selectWord;
      let bank;
      switch (len) {
        case 7: bank = wordBankHard; break;
        case 6: bank = wordBankMedium; break;
        case 5: bank = wordBankEasy; break;
        default: bank = wordBankEasy; break;
      }
      await fetch(bank)
        .then((response) => response.text())
        .then((result) => {
          const wordArr = result.split("\n");
          selectWord = wordArr[Math.floor(Math.random() * wordArr.length)];
          wordSet = new Set(wordArr);
        });
      return { wordSet, selectWord };
    };
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.selectWord);
    });
  }, [len]);

    

  const onEnter = () => {
    console.log("before enter" + currAttempt.letter)
    if (currAttempt.letter  < col) return;
    console.log("after enter" + currAttempt.letter)
    let currWord = "";
    for (let i = 0; i < col; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      clearBoard(currAttempt.attempt);
      setCurrAttempt({ ...currAttempt,  letter: 0 });
      return;
    }

    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currAttempt.attempt === row) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    setNewBoard(board, "");
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.attempt > row - 1) return;
    setNewBoard(board, key)
    setCurrAttempt({
      ...currAttempt, 
      letter: (currAttempt.letter + 1),
    });
  };
  
  return (
    <GameContext.Provider
      value={{
      row,
      setRow,
      col,
      setCol,
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
      {children}
    </GameContext.Provider>
  )
}
