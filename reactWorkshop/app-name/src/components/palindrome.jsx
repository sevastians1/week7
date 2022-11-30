import { useState } from 'react'


function Palindrome(){

const [input, updateInput] = useState("")


    function handleChange(event){
        updateInput(event.target.value)
        console.log(event.target.value)
    }







    function CheckPalindrome({input}){
    let new_string=input.split("")
    let array=[]
    for (let i=new_string.length-1; i>-1;i--){
        array.push(new_string[i])
    }
    let possiblePalindrome=array.join('')
    console.log(possiblePalindrome)
    if (possiblePalindrome===input){
        return (<div><p>IT IS A Palindrome</p> </div>)
    }
    else{
        return (<div><p>IT IS NOT A Palindrome</p> </div>)
    }
    }








    return (
        <div>
        <input type="text"
        onChange={handleChange}
        
        ></input>
        <CheckPalindrome input={input}/>
          <p>Your input is: <br/> {input}</p>
        </div>
    )
}

export default Palindrome