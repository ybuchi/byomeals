import React from "react";
import FoodCard from "./FoodCard";
import Grid from '@mui/material/Grid';
import "./FoodContainer.css";

function FoodContainer({foodInFridge, deleteItem, fridgeData, setFridgeData, incrementQuantity, decrementQuantity}) {
    
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
            <Grid container spacing={1} className="item-container">
                {mappedFoodItems}
            </Grid>
        </>
    )
}
export default FoodContainer;