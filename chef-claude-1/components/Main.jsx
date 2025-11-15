import { useState, useEffect } from "react"

export default function Main(prop){

    
    const [ingred, setIngred]=useState([])



    const listIngred=ingred.map(ing =>
            <li key={ing}>{ing}</li>
    )

    function handleIngred(event){
        event.preventDefault()
        const formData=new FormData(event.currentTarget)
        const ingredient=formData.get("ingredient")
        // console.log(ingred)
        setIngred(ingred => [...ingred, ingredient])
    }


    return(

        <>
        <main>
        <form onSubmit={handleIngred} className="add-ingredient-form">
                <input type="text" 
                    name="ingredient"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"/>
            <button>Add ingredients</button>
        </form>

        {ingred && 
        <section>
            <h2>Ingredients at hand</h2>
            <ul className="ingred-list">{listIngred}</ul>
        </section>
        }

        {
            ingred.length>2 && 
            <section className="get-recipe">
                <div ref={prop.ref}>
                <h3>Ready for a recipe</h3>
                <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={prop.toggleRecipe}>Get a recipe</button>
            </section>
        }

        </main>
        </>

    )
}