import { useState } from "react"

export default function Main() {

    const [meme, memeSetter]=useState({
        topText: "One does not simply",
        bottomText: "walk into mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    function handleEvent(event) {
        const { value, name }=event.currentTarget

        memeSetter(prev => ({
            ...prev,
            [name]:value
        }))
    }

    return (
    <main>
    <div className="form">

    <label htmlFor="">Top Text
    <input type="text" placeholder="One does not simply" name="topText" onChange={handleEvent} ></input>
    </label>


    <label htmlFor="">Top Text
    <input type="text" placeholder="walk into mordor" name="bottomText" onChange={handleEvent}></input>
    </label>
    <button>Get a meme</button>

    <div className="meme">
    <img src={meme.imageUrl} />
    <span className="top">{meme.topText}</span>
    <span className="bottom">{meme.bottomText}</span>
    </div>

    </div>
    </main>
    )
}