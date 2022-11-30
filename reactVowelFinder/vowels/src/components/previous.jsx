import { useState } from 'react'



function PreviousValues(prop){


// if (prop.currentWord===""){
    
// }
// else{
// let newData=[...text, prop.currentWord]
// console.log(newData)
// setText(newData)}


const renderData = () => {
    let elements = []
    for (let i = 0; i < prop.currentArray.length; i++) {
        if (prop.currentArray[i]=="") {continue}
      elements.push(<li key={`${i}`}>{prop.currentArray[i]}</li>)
    }

    return elements
  }


    return (<div>
    <ul>
        {renderData()}
    </ul>

    </div>) 
}

export default PreviousValues;