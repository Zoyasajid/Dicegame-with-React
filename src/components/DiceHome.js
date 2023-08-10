import React from 'react'
import dice from './pic/dices1.png'
import './Dice.css'
function DiceHome({toggle}) {
  return (
    <div className='dicemain'>
        <div>
        <img className="dice" src={dice} alt="logo" />
        </div>
        <div className='text'>
            <h1>DICE GAME</h1>
            <button onClick={toggle}>Play Now</button>
        </div>
    </div>
  )
}

export default DiceHome