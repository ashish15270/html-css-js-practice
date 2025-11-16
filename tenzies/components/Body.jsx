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

    console.log(diceNums)
    const diceEle=diceNums.map(dieObj =>
        <Die key={dieObj.id} value={dieObj.value}  />
    )
    console.log(diceEle)

    return (
        <main className="main-container">
            <section className="dies">
            {diceEle}
            </section>
            <button onClick={()=>{diceNumArrSet(getdiceNums())}}>Roll the dice!</button>
        </main>
    )
}