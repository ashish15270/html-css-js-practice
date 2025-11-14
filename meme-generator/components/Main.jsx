import { useState, useEffect } from "react"

export default function Main() {

    const [meme, memeSetter]=useState({
        topText: "One does not simply",
        bottomText: "walk into mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [updateMeme, getNewMeme]=useState(true)

    function changeMeme() {
        getNewMeme(!updateMeme)
    }

    function handleEvent(event) {
        const { value, name }=event.currentTarget

        memeSetter(prev => ({
            ...prev,
            [name]:value
        }))
    }
    


    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                const randomurl=data.data.memes[Math.floor( Math.random() * data.data.memes.length)]['url']
                meme.imageUrl=randomurl
            })        
    }
    ,[updateMeme])


    return (
    <main>
    <div className="form">

    <label htmlFor="">Top Text
    <input type="text" placeholder="One does not simply" name="topText" onChange={handleEvent} ></input>
    </label>


    <label htmlFor="">Top Text
    <input type="text" placeholder="walk into mordor" name="bottomText" onChange={handleEvent}></input>
    </label>
    <button onClick={changeMeme}>Get a meme</button>

    <div className="meme">
    <img src={meme.imageUrl} alt="meme"/>
    <span className="top">{meme.topText}</span>
    <span className="bottom">{meme.bottomText}</span>
    </div>

    </div>
    </main>
    )
}