import React from "react";
import FoodCard from "./FoodCard";
import Row from 'react-bootstrap/Row';

function FoodContainer({fridgeData, setFridgeData}) {
    const mappedFoodItems = fridgeData.map(foodItem => <FoodCard key={foodItem.id} foodItem={foodItem}/>)
    return(
        <>
            <h1 className="main-title">Fridge</h1>
            <Row xs={1} md={2} lg={4}>{mappedFoodItems}</Row>
            
        </>

    )
}
export default FoodContainer;