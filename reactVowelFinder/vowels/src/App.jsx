import { useState } from 'react'
import './App.css'
import Vowel_component from './components/vowel_component.jsx'


function App() {
  const [counter, setCounter]=useState(0)
  const incrementCounter=()=>{
    setCounter(prevCounter => prevCounter + 1)
    console.log(counter)
  }
  return (
    <div>
      <p>helloworld</p>
      <Vowel_component currentNumber={counter} Clicker={incrementCounter}/>
    </div>
  )
}

export default App
