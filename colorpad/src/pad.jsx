export default function Pad(prop) {
    return (

        <button className={prop.on ? "on" : ""} style={{backgroundColor: prop.color }}> </button>
        // {/* <button style={{backgroundColor:prop.color}}></button> */}
        
    )
}