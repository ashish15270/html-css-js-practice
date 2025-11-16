import { useState } from "react"

import Die from "./Die"

export default function Body(){
    

    const [diceNums, diceNumArrSet]=useState(getdiceNums())

    function getdiceNums(){
        const tempArr=[]
        for (let index = 0; index < 10; index++) {
        const EachDiceNum=Math.floor(Math.random()*6)+1   
        tempArr.push(EachDiceNum)   
    }
    return(tempArr)
    }

    const diceEle=diceNums.map(num => 
        <Die num={num}/>
    )

    return (
        <main className="main-container">
            <section className="dies">
            {diceEle}
            </section>
        </main>
    )
}