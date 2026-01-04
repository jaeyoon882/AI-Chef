import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "/src/ai.js"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])

    function addIngredients(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    //set recipe give by ai agent as state, so that it doesn't disappear between each state change
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const message = await getRecipeFromMistral(ingredients)
        setRecipe(message)

    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredients}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>+ Add ingredient</button>
            </form>
            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />}
            {recipe !== "" &&
                <ClaudeRecipe
                    recipe={recipe}
                />}
        </main>
    )
}