import React, { useState } from "react";
import FoodCard from "./FoodCard";
import Grid from '@mui/material/Grid';
import "./FoodContainer.css";
import TextField from '@mui/material/TextField';


function FoodContainer({foodInFridge, deleteItem, fridgeData, setFridgeData, incrementQuantity, decrementQuantity, searchState, handleSearchChange}) {
    
    const mappedFoodItems = foodInFridge.map((foodItem) => <FoodCard 
                                                            key={foodItem.id} 
                                                            foodItem={foodItem} 
                                                            deleteItem={deleteItem}
                                                            fridgeData={fridgeData}
                                                            setFridgeData={setFridgeData}
                                                            incrementQuantity={incrementQuantity} 
                                                            decrementQuantity={decrementQuantity}/>
    )  

       
    return(
        <>
            <h1 className="main-title">Fridge</h1>
            <TextField 
                className="ingredient-search"
                label="Search by Ingredient or Ingredient Type"
                InputProps={{style:{fontSize : "40px", fontFamily : "'Caveat Brush', cursive", margin: "20px 30px"}}}
                InputLabelProps={{style: {fontSize : "30px", fontFamily : "'PT Sans', sans-serif", margin:"20px 30px"}}} 
                variant="standard"
                onChange={handleSearchChange}
                value={searchState} />
            <Grid container spacing={1} className="item-container">
                {mappedFoodItems}
            </Grid>
        </>
    )
}
// id="standard-basic"
export default FoodContainer;