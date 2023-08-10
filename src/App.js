import './App.css';
import React,{useState} from 'react'
import DiceHome from './components/DiceHome';
import PlayGame from './components/PlayGame';
function App() {
  const [startGame,setStartGame]=useState(false)
  const toggleFunction=()=>{
    setStartGame((prev)=>!prev)
  }
  return (
    <>
    {startGame?<PlayGame/>:<DiceHome toggle={toggleFunction}/>}
    </>
  );
}

export default App;
