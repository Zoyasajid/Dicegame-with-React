import React, { useState } from "react";
import "./playgame.css";
import RandomDice from "./RandomDice";
import Rules from "./Rules";
function PlayGameNavbar() {
  const arraNum = [1, 2, 3, 4, 5, 6];
  const [score, setScore] = useState(0);
  const [isSelected, setIsSelected] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [rules, setRules] = useState(false);
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice = () => {
    if (!isSelected) {
      setError("You have not selected any number");
      return;
    } else {
      setError("");
    }
    const rollrandomlimits = randomNumber(1, 7);
    setCurrentDice((prev) => rollrandomlimits);
    if (isSelected === rollrandomlimits) {
      setScore((prev) => prev + rollrandomlimits);
    } else {
      setScore((prev) => prev - 2);
    }
    setIsSelected(undefined);
  };
  const handleNumber = (value) => {
    setIsSelected(value);
    setError("");
  };
  const resetscore = () => {
    setScore(0);
    setError("");
  };
  return (
    <>
      <div className="nav">
        <div className="score">
          <h1>{score}</h1>
          <p>SCORE</p>
        </div>
        <div className="dice-select">
        <p className="error2">{error}</p>
        <div className="selectedDice">
          {arraNum.map((value, i) => {
            return (
              <div key={i} onClick={() => handleNumber(value)} className="box">
                {value}
              </div>
            );
          })}
        </div>
      <p className="p-tag">{isSelected} Select Number</p>
      </div>
      </div>
      <div className="randomDice">
        <div onClick={rollDice}>
          <img
            className="diceroll"
            src={require(`./pic/diceimages/dice_${currentDice}.png`)}
          />
        </div>
        <p>Click on Dice to roll</p>
      </div>
      <div className="btn">
        <button className="btn1" onClick={resetscore}>
          Reset score
        </button>
        <button onClick={() => setRules((prev) => !prev)} className="btn2">
          {rules ? "Hide" : "Show"} Rules
        </button>
      </div>
      {rules && <Rules />}
      {/* <Rules/> */}
    </>
  );
}

export default PlayGameNavbar;
