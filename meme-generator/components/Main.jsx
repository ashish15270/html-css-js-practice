export default function Main() {
    return (
    <main>
    <div className="form">

    <label htmlFor="">Top Text
    <input type="text" placeholder="One does not simply" name="toptext"></input>
    </label>


    <label htmlFor="">Top Text
    <input type="text" placeholder="walk into mordor" name="bottomtext"></input>
    </label>
    <button>Get a meme</button>

    <div className="meme">
    <img src="http://i.imgflip.com/1bij.jpg" />
    <span className="top">One does not simply</span>
    <span className="bottom">Walk into Mordor</span>
    </div>

    </div>
    </main>
    )
}