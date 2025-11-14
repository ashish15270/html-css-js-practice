export default function Main(){
    return(
        <>
        <main>
        <form className="add-ingredient-form">
                <input type="text" 
                    name="ingredient"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"/>
            <button>Add ingredients</button>
        </form>
        </main>
        </>
    )
}