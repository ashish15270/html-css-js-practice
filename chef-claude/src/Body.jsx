import React from "react"

export default function Body(prop) {

    const [ingredients, updateIngredients]=React.useState([])

    const listIngredients=ingredients.map(ing => 
        <ul>
            <li key={ing}>{ing}</li>
        </ul>
        )

    function handleIngredient(event){
        event.preventDefault()
        const formData=new FormData(event.currentTarget)
        const ingredient=formData.get("ingredient")
        console.log(ingredient)
        updateIngredients(ingredients => [...ingredients, ingredient])
    }



    return (
        <main>
            <form onSubmit={handleIngredient} className="add-ingredient-form" action="">
             <input type="text" 
                    name="ingredient"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"/>
    <button>Add ingredients</button>
    </form>
    
    { ingredients.length>0 && 
    <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">{listIngredients}</ul>
    </section>
            }
    {ingredients.length>2 && 
    <div className="get-recipe-container">
    <div>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
    </div>
    <button onClick={prop.showRecipe}>Get a recipe</button>
    </div>
    
    }
        </main>
   
    )
}
