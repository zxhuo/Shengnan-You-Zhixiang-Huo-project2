import React from "react";
import { useGameContext } from "../../contexts/GameProvider";


function Key({ keyVal, bigKey, disabled }) {
  const{
    onSelectLetter,
    onDelete,
    onEnter,
    gameOver,
  } =
    useGameContext();

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal == "ENTER") {
      onEnter();
    } else if (keyVal == "DELETE") {
      onDelete();
    } else {
      console.log("key clicked: " + keyVal)
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;