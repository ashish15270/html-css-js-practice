import padsData from "./pads"
import React from "react"
import Pad from "./Pad"

export default function App(){
  const [pads, setPads]=React.useState(padsData)

  const buttonElements = pads.map(pad=>
    (<Pad key={pad.id} {...pad}/> 
    ))

  return(
    <main>
      <div className="pad-container">
        {buttonElements}
    </div>
    </main>
  )
}