export default function Die(prop){

    function toggelDice(){
        const newDice = prop.dice.map((die,currId) => {
            if(currId===prop.id){
            return({...die, isHeld:!die.isHeld})}
            else{
            return die
            }
        })
        prop.setDice(newDice)
        let count=0
        
        prop.dice.map((die)=>{if(die.isHeld && prop.dice[0].value===die.value)
        {count++
        if (count===9){
            prop.setTenzies(true)
        }
        }
        
        })
    }
    return(
        
            <button style={{backgroundColor:prop.isHeld ? "green" : "aliceblue"}} onClick={()=>toggelDice()} >{prop.value}</button>
    )
}