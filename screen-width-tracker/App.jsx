import React from "react";

import WindowTracker from "./components/WindowTracker";

export default function App() {

    const [show, setShow]=React.useState(true)

    function toggle() {
        setShow(prev => !prev)
    }

    return (
        <>
        <main >
            <button onClick={toggle}>Toggle window tracker</button>
        </main>
        {show && <WindowTracker/>}
        </>
    )
}