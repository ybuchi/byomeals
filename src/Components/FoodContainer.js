import React from "react";
import FoodCard from "./FoodCard";
import Grid from '@mui/material/Grid';

function FoodContainer({fridgeData, setFridgeData}) {
    const mappedFoodItems = fridgeData.map(foodItem => <FoodCard key={foodItem.id} foodItem={foodItem}/>)
    return(
        <>
            <h1 className="main-title">Fridge</h1>
            <Grid container spacing={1}>
                {mappedFoodItems}
            </Grid>
            
        </>

    )
}
export default FoodContainer;