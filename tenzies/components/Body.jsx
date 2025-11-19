import { useState, useEffect, useRef } from "react"

import Die from "./Die"

export default function Body(){
    

const [diceNums, diceNumArrSet]=useState(()=>getdiceNums())

const endgame=diceNums.every(dice=> dice.isHeld) && diceNums.every(dice => diceNums[0].value===dice.value)

const newGameButton=useRef(null)

// function endGame(){
//     let win=0
//     const winNum=diceNums[0]['value']
//     for (let index = 0; index < 10; index++) {
//         if (diceNums[index]['value']===winNum) {
//             win=win+1
//         }           
//     }
//     console.log(diceNums)
//     if (win===10){
//         endgame=true
//     }
// }

useEffect(()=>{
    newGameButton.current.focus()
}, [endgame])


function getdiceNums(){
    let tempObj={}
    const tempArray=[]
    for (let index = 0; index < 10; index++) {
    const EachDiceNum=Math.floor(Math.random()*6)+1   
    tempObj={value:EachDiceNum,isHeld:false, id:index}   
    tempArray.push(tempObj)
    }
    return(tempArray)
    }

    function holdFunc(id) {

        diceNumArrSet(prev => 
            prev.map(die => 
                die.id===id ? 
                {...die, isHeld:!die.isHeld}: 
                die
        ))
    }


    function rollUnheld(){
        if (!endgame){
        diceNumArrSet(
            prev => 
                prev.map( die => die.isHeld ? die : 
                    {...die, value: Math.floor(Math.random()*6)+1}
                 ))
                }
            else {
                diceNumArrSet(getdiceNums())}
    }

    const diceEle=diceNums.map(dieObj =>
        <Die key={dieObj.id} id={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} holdFunc={()=>{holdFunc(dieObj.id)}} />
    )

    
    return (
        <main className="main-container">
         <section className="dies">
            {diceEle}
            </section>
            <button onClick={rollUnheld} ref={newGameButton}>
                {endgame ? "Restart": "Roll the dice!"}
                </button>
        </main>
    )
}