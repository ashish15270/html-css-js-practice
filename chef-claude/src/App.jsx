import Header from "./Header";
import Body from  "./Body";
import Recipe from "./Recipe";
import React from "react";



export default function App() {
    const show=false
    const [display,setDisplay]=React.useState(show)

    function showRecipe(){
        setDisplay(notDisplay=>!notDisplay)
    }
    return( 
    <>
        
        <Header />
        <Body  showRecipe={showRecipe}/>
        <Recipe show={display}/>
    </>
    )
}