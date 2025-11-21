export default function CharButtons(prop){

    const chars = [
        "a","b","c","d","e","f","g","h","i","j","k","l","m",
        "n","o","p","q","r","s","t","u","v","w","x","y","z",
        "0","1","2","3","4","5","6","7","8","9"
      ]  

      const styles={
        display:"none"
      }

      function updatePuzz(event){
   //     console.log(prop.puzzObjArr)
        const puzzle=prop.puzzChars.map( p => p.value)
      //  console.log()
      const inputVal=event.currentTarget.value

      if (prop.puzzChars.some(char => char.value===inputVal)){
        prop.setPuzzle(
          prev => prev.map(
            char=> char.value===inputVal ? {...char, show:true} : char
          )
        )
      } 
      console.log(prop.puzzChars)          
      }

      const charButtons = chars.map(
        char => <button className="char-button" value={char} onClick={(e)=>updatePuzz(e)}>{char}</button>
      )

    return(
      <div className="keyboard-box">
        {charButtons}
      </div>        
    )
}