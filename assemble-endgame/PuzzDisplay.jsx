export default function PuzzDisplay(prop){

    console.log(prop.puzzObjArr)

    return (
        <div className="puzzle">
          {prop.puzzObjArr.map(obj => (obj.show &&
            <div key={obj.value} className="puzzle-letters">
              {obj.value}
            </div>
          ))}
        </div>
      )
}