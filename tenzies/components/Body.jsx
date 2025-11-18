import { useState } from "react"

import Die from "./Die"

export default function Body(){
    

const [diceNums, diceNumArrSet]=useState(getdiceNums())
const [endgame, setEndgame]=useState(false)


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
        let win=0
        const winNum=diceNums[0]['value']
        for (let index = 0; index < 10; index++) {
            if (diceNums[index]['value']===winNum) {
                win=win+1
            }           
        }
        if (win===10){
            setEndgame(true)
        }

        diceNumArrSet(prev => 
            prev.map(die => 
                die.id===id ? 
                {...die, isHeld:!die.isHeld}: 
                die
        ))
    }


    function rollUnheld(){
        diceNumArrSet(
            prev => 
                prev.map( die => die.isHeld ? die : 
                    {...die, value: Math.floor(Math.random()*6)+1}
                 ))
    }

    const diceEle=diceNums.map(dieObj =>
        <Die key={dieObj.id} id={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} holdFunc={()=>{holdFunc(dieObj.id)}} />
    )

    
    return (
        <main className="main-container">
         {!endgame && <section className="dies">
            {diceEle}
            </section>}
            {endgame && <section className="dies">
                 <h1> You won!</h1> 
                 </section> }
            <button onClick={rollUnheld}>Roll the dice!</button>
        </main>
    )
}