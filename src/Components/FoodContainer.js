import React from "react";
import FoodCard from "./FoodCard";

function FoodContainer({fridgeData, setFridgeData}) {
    const mappedFoodItems = fridgeData.map(foodItem => <FoodCard key={foodItem.id} foodItem={foodItem}/>)
    return(
        <>
            <h1>Your Fridge</h1>
            {mappedFoodItems}
        </>

    )
}
export default FoodContainer;