import React from "react";
import { useOutletContext } from "react-router-dom";
import FridgeDashboard from "./FridgeDashboard";
import RecipesDashboard from "./RecipesDashboard";
import "./Dashboard.css"
import Grid from '@mui/material/Grid';



function Dashboard() {
    const [fridgeData, setFridgeData, newItemForm, newItemFormState, searchState, setSearchState] = useOutletContext();

    const foodInFridge = fridgeData.filter((foodObject) => {
        return foodObject.isInFridge && (foodObject.item_name.toLowerCase().trim().includes(searchState.toLowerCase().trim()) || foodObject.type.toLowerCase().trim().includes(searchState.toLowerCase().trim()));
    })
    const depletedFoods = fridgeData.filter(foodObject=>!foodObject.isInFridge);

    return(
        <>
            <h1 className="title">Welcome to BYOMeals</h1>
            <h3 className="subtitle">...where your home cooking dreams come to life</h3>

            <Grid container spacing={1} id="item-container">
                <FridgeDashboard fridgeData={ fridgeData } foodInFridge={foodInFridge} depletedFoods={depletedFoods}/>
                <RecipesDashboard />
            </Grid>

            
        </>
    )
}

export default Dashboard;