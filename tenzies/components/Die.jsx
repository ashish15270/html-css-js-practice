
export default function Die(prop) {
    const styles={
        backgroundColor: prop.isHeld ? "yellow" : "white"
    }


    return(
        <>
            <button style={styles} className="die"  onClick={prop.holdFunc} >{prop.value}</button>
        </>
    )
}