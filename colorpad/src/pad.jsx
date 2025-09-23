import React from "react"


export default function Pad(prop) {
   

    return (

        <button  onClick={()=>prop.toggle(prop.id)} className={prop.on ? "on" : undefined} style={{backgroundColor: prop.color }}> </button>
        
    )
}