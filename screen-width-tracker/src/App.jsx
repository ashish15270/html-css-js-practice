import Window from "./WindowTracker"
import React from "react"

export default function App(){
  const [show, setShow]=React.useState(false)

  function toggle(){
    setShow(prevShow=>!prevShow)
  }

  return(<>
  <Window toggle={toggle}/>
  </>
  ) 
}