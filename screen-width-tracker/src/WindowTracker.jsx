import React from "react";

export default function Window(prop){
    const [windowWidth, setWindowWidth]=React.useState(window.innerWidth)

    React.useEffect(()=>{
        setWindowWidth(window.innerWidth)
    },[windowWidth])
    return <h1>{windowWidth}
    <section>
        <button onClick={prop.toggle}>Reset</button>
    </section>
    </h1>
}