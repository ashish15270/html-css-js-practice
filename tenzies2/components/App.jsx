import { useState } from "react"
import Die from "./Die"

export default function App() {

const [dice,setDice]=useState(()=>generate_new_dice())
const [tenzies,setTenzies]=useState(false)


function generate_new_dice(){
return new Array(10).fill(0).map(()=>({value:Math.ceil(Math.random()*6),
    isHeld:false
  }))
 }

 
    const dieElements=dice.map((die,index)=>
    (
        <Die key={index} value={die.value} isHeld={die.isHeld} dice={dice} setDice={setDice} id={index} tenzies={tenzies} setTenzies={setTenzies}/>
    )
    )

function updateDice(){
  let newDice=dice.map(die => 
{
  if(die.isHeld){

    return die
  }
  else{
    return {
      ...die,
      value:Math.ceil(Math.random()*6)
    } 
  }
})
setDice(newDice)
}

    return (
      <main>
        <section className="die-container"> 
        {!tenzies && dieElements}  
        {tenzies && 
        <section className="die-container">
        You won
        </section>
        } 
        </section>
        <button className="reset-button" onClick={()=>updateDice()}>Reset</button>
      </main>
    )
}   