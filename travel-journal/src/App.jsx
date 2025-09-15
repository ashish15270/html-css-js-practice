import { hydrateRoot } from "react-dom/client";
import Header from "./Header"
import Entry from "./entry"
import data from "./data"

export default function App() {
    
    const entryElements=data.map((entry) => {
        return (
            < Entry 
            key={entry.id}
            {...entry}
            />
        )
    }
)
return (
    <>
< Header/>
<main>
    {entryElements}
</main>
</>
)   
}