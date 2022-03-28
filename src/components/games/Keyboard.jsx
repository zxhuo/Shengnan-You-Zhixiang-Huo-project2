import React, { useCallback, useMemo, useEffect } from "react";
import Key from "./Key";
import { useGameContext } from "../../contexts/GameProvider";

function Keyboard() {
  const line1 = useMemo(() => ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    []);
  const line2 = useMemo(() => ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    []);
  const line3 = useMemo(() => ["Z", "X", "C", "V", "B", "N", "M"],
    []);

  const {
    disabledLetters,
    currAttempt,
    gameOver,
    onSelectLetter,
    onEnter,
    onDelete,
    
  } = useGameContext();
  // [gameOver.gameOver, line1, line2, line3, onDelete, onEnter, onSelectLetter]
  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        console.log('Key pressed: ' + event.key.toLowerCase());
        line1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        line2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {

        
            onSelectLetter(key);
          }
        });
        line3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
      
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

 //   console.log(disabledLetters);
    
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {line1.map((key) => {
          return <Key keyVal={key}  disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className="line2">
        {line2.map((key) => {
          return <Key keyVal={key}  disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className="line3">
        <Key keyVal="ENTER" bigKey />
        {line3.map((key) => {
          return <Key keyVal={key}  disabled={disabledLetters.includes(key)} />;
        })}
        <Key keyVal="DELETE" bigKey />
      </div>
    </div>
  );
}

export default Keyboard;