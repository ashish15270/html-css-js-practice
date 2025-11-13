import React from "react"

export default function WindowTracker() {

    const [windowWidth, updateWidth]=React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWindow (){
            console.log('status:on')
            updateWidth(window.innerWidth)
            
        }
        window.addEventListener("resize", watchWindow)
        return function() {
            console.log('status:off')
            window.removeEventListener("resize", watchWindow)
        }
    },[])

    return (
        <>
        <h1>WindowTracker: {windowWidth} </h1>
        </>
    )
}