import { useState } from "react"

import Die from "./Die"

export default function Body(){
    

const [diceNums, diceNumArrSet]=useState(getdiceNums())


function getdiceNums(){
    let tempObj={}
    const tempArray=[]
    for (let index = 0; index < 10; index++) {
    const EachDiceNum=Math.floor(Math.random()*6)+1   
    tempObj={value:EachDiceNum,isHeld:false, id:index}   
    tempArray.push(tempObj)
    }
    // console.log(tempArray)
    return(tempArray)
    }

    function holdFunc(id) {
        diceNumArrSet(prev => 
            prev.map(die => 
                die.id===id ? 
                {...die, isHeld:!die.isHeld}: 
                die)
        )
    }


    function rollUnheld(){
        diceNumArrSet(
            prev => 
                prev.map( die => die.isHeld ? die : 
                    {...die, value: Math.floor(Math.random()*6)+1}
                 ))
      //  console.log(diceNums)
    }

    const diceEle=diceNums.map(dieObj =>
        <Die key={dieObj.id} id={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} holdFunc={()=>{holdFunc(dieObj.id)}} />
    )

    
    

    return (
        <main className="main-container">
            <section className="dies">
            {diceEle}
            </section>
            <button onClick={rollUnheld}>Roll the dice!</button>
        </main>
    )
}