import padsData from "./pads"
import React from "react"
import Pad from "./Pad"

export default function App(){
  const [pads, setPads]=React.useState(padsData)



  function toggle(id){
    setPads(prevPad => prevPad.map(pad => pad.id===id ? {...pad,on:!pad.on}: pad))
  }

  const buttonElements = pads.map(pad=>
    (<Pad key={pad.id} {...pad} toggle={toggle} /> 
    ))

  return(
    <main>
      <div className="pad-container">
        {buttonElements}
    </div>
    </main>
  )
}