import { useState, useRef, useEffect } from "react"

import Header from "./components/Header"
import Main from "./components/Main"
import Recipe from "./components/Recipe"

export default function App() {

    const [recipeSection, showRecipe]=useState(false)
    const recipeScroll=useRef(null)

    console.log(recipeScroll)

    function toggleRecipe() {
        showRecipe(prev => !prev)
    }

    useEffect(()=>{
        if (recipeSection)
        {recipeScroll.current.scrollIntoView({behavior: "smooth"})}
    },[recipeSection]
    )
    
    return (
    <>
    <Header />
    <Main toggleRecipe={toggleRecipe} ref={recipeScroll}/>
    <Recipe recipeSection={recipeSection}/>
    </>
    )
}