import React from "react";
import { useOutletContext } from "react-router-dom";
import FridgeDashboard from "./FridgeDashboard";
import "./Dashboard.css"


function Dashboard() {
    const [fridgeData, setFridgeData, newItemForm, newItemFormState, searchState, setSearchState] = useOutletContext();

    const foodInFridge = fridgeData.filter((foodObject) => {
        return foodObject.isInFridge && (foodObject.item_name.toLowerCase().trim().includes(searchState.toLowerCase().trim()) || foodObject.type.toLowerCase().trim().includes(searchState.toLowerCase().trim()));
    })

    return(
        <>
            <h1 className="title">Welcome to BYOMeals</h1>
            <h3 className="subtitle">...where your home cooking dreams come to life</h3>

            <FridgeDashboard fridgeData={ fridgeData } foodInFridge={foodInFridge}/>

            <h2>Recipe Summary</h2>
            <p><strong>Number of Recipes Cooked: </strong></p>
            <p><strong>Favorite Recipes: </strong></p>
            <button>Go to Recipe Finder</button>
        </>
    )
}

export default Dashboard;