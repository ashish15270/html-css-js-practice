import { useImperativeHandle } from "react";

export default function Body() {
    return (
        <main>
             <input type="text" 
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"/>
    <button>Add ingredients</button>
        </main>
   
    )
}