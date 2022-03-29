import React, { useState, createContext, useEffect, useContext } from "react";
import wordBankHard from "../wordle-bank-hard.txt";
import wordBankMedium from "../wordle-bank-medium.txt";
import wordBankEasy from "../wordle-bank-easy.txt";
import InvalidWord from "../components/games/InvalidWord";
import Modal from "../components/games/Modal";

export const GameContext = createContext();

// export GameContext
export function useGameContext() {
  return useContext(GameContext);
} 

export function GameProvider({ len, trytime, children }) {
  
  // global state
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

  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

// update board using setBoard() when enter or clear letter
  const setNewBoard = (board, key) => {
    console.log(board + " board");
    console.log(correctWord);
    const newBoard = [];
    for (let r = 0; r< board.length; r++) {
      newBoard[r] = [...board[r]];
    }
    console.log(newBoard + " newboard");
    if (key === '') {
      newBoard[currAttempt.attempt][currAttempt.letter-1] = key;
    }
    else newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
  }

  // update row using setBoard() when enter or clear letter
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

  // generate wordArr, selectWord when the Game App was first mount 
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
          const wordArr = result.split("\n").map(word => word.toLowerCase());
          selectWord = wordArr[Math.floor(Math.random() * wordArr.length)];
          wordSet = new Set(wordArr);
        });
      return { wordSet, selectWord };
    };
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.selectWord);
      console.log("Correct Word: " + words.selectWord);
    });
  }, []);

  // handle enter
  const onEnter = () => {
    console.log("before enter: " + currAttempt.letter)
    if (currAttempt.letter  < col) {
      // TODO: alert word is too short.
      clearBoard(currAttempt.attempt);
      setCurrAttempt({ ...currAttempt,  letter: 0 });
      return;
    }
    console.log("after enter: " + currAttempt.letter)
    let currWord = "";
    for (let i = 0; i < col; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      //TODO: alert word is not on the list.
      clearBoard(currAttempt.attempt);
      setOpen(true);
      setCurrAttempt({ ...currAttempt,  letter: 0 });
      return;
    }
    if (currWord === correctWord.toUpperCase()) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    if (currAttempt.attempt === row  - 1 ) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  // handle delete
  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    setNewBoard(board, '');
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
    
  };

  // handle select letter (key or click)
  const onSelectLetter = (key) => {
    if (currAttempt.attempt > row - 1) return;
    if (currAttempt.letter > col - 1) return;
    setNewBoard(board, key)
    setCurrAttempt({
      ...currAttempt, 
      letter: (currAttempt.letter + 1),
    });
  };

  // export Context Provider
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
      open,
      setOpen,
      modal,
      setModal
    }}
    >
      <Modal />
      <InvalidWord  />
        {children}
    </GameContext.Provider>
  )
}

