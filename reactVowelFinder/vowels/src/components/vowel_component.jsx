import PreviousValues from "./previous.jsx" 
import { useState } from 'react'

function Vowel_component(props) {


    const [myWord, setmyWord]=useState("")
    const [updated, setUpdated]=useState(myWord)
    const [text, setText]= useState(["mytext", "mysettext2"])

    function setWord(e){
        setmyWord(e.target.value)
        console.log(myWord)
    }

    function handleClick(){
        setUpdated(myWord)
        let newData=[...text, updated]
        setText(newData)
    }


    return (
        <div>
        <p>{props.currentNumber}</p>
        <button id="my-button" onClick={props.Clicker} ></button>
      <h2>Your word: {myWord}</h2>
      <input id="grabMe" type="text" onChange={setWord}></input>
      <button type="submit" onClick={handleClick}>Submit</button>
        <PreviousValues currentWord={updated} currentArray={text}/>
        <h3>{updated} </h3>
      </div>
    )
  }
  
  export default Vowel_component;