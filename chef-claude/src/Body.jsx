import React from "react"

export default function Body() {

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
    {listIngredients}
        </main>
   
    )
}
