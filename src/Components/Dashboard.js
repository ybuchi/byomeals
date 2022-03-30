import React from "react";
import { useOutletContext } from "react-router-dom";


function Dashboard() {
    const [fridgeData, setFridgeData, newItemForm, newItemFormState, searchState, setSearchState] = useOutletContext();

    const foodInFridge = fridgeData.filter((foodObject) => {
        return foodObject.isInFridge && (foodObject.item_name.toLowerCase().trim().includes(searchState.toLowerCase().trim()) || foodObject.type.toLowerCase().trim().includes(searchState.toLowerCase().trim()));
    })

    return(
        <>
            <h1>Welcome to BYOMeals</h1>
            <h3>Where your home cooking dreams come to life</h3>
            <h2>Fridge Summary</h2>
            <p><strong>Number of Items in Fridge: </strong>{foodInFridge.length}</p>
            <button>Go to Fridge</button>
            <h2>Recipe Summary</h2>
            <p><strong>Number of Recipes Cooked: </strong></p>
            <p><strong>Favorite Recipes: </strong></p>
            <button>Go to Recipe Finder</button>
        </>
    )
}

export default Dashboard;