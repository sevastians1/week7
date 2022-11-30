import { useState } from 'react'
import './App.css'
import './components/palindrome.jsx'
import OnImage from './templates/on.svg';
import OffImage from './templates/off.svg';
import Palindrome from './components/palindrome.jsx';
function App() {
  const [buttonValue, changeButton]=useState(false)

  function Image({buttonValue, clickMe}){
    if (buttonValue){
      return (
        <div>
        <img src={OnImage} onClick={clickMe}></img>
        </div>
      )
    }
    else{
      return(
        <div>
          <img src={OffImage} onClick={clickMe}></img>
        </div>)
    }
  }


  function clickMe(){
    changeButton((prevValue)=>!prevValue)
    console.log("button clicked")
  }

  return (
    <div className="App">
   <Palindrome/>
  <button onClick={clickMe}> Click to Mute  </button>
  <Image buttonValue={buttonValue} clickMe={clickMe}/>
    </div>
  
  )
}

export default App
