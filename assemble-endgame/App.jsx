import { useState } from "react"
import CharButtons from "./components/Char-buttons"
import PuzzDisplay from "./PuzzDisplay"


export default function App(){
const puzzle="assembly".split("")

const [puzzChars, setPuzzle] =useState(()=>puzzle.map(letter=> 
    ({value:letter,show:false})
))


    return (
        <>
        <section className="main-container">
            <PuzzDisplay puzzObjArr={puzzChars} />
            <CharButtons setPuzzle={setPuzzle} puzzChars={puzzChars}/>
        </section>   
        </>
    )
}