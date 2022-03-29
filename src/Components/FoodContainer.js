import React from "react";
import FoodCard from "./FoodCard";
import Grid from '@mui/material/Grid';
import "./FoodContainer.css";

function FoodContainer({fridgeData, incrementQuantity, decrementQuantity}) {
    const foodsInFridge = fridgeData.filter((foodItem)=>foodItem.isInFridge)
    const mappedFoodItems = foodsInFridge.map(foodItem => <FoodCard key={foodItem.id} foodItem={foodItem} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>)
    return(
        <>
            <h1 className="main-title">Fridge</h1>
            <Grid container spacing={1} className="item-container">
                {mappedFoodItems}
            </Grid>
            
        </>
    )
}
export default FoodContainer;