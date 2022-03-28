import React, {useState, useEffect} from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';



function FoodCard({foodItem}) {

    // //Currently only using this useEffect to get the pictures of the food items
    // useEffect(()=>{
    //     fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=52ce18e1&app_key=94901fd21fbdbc510e92bd7736f43784&ingr=${foodItem.item_name.trim()}&nutrition-type=cooking`)
    //     .then(res=> res.json())
    //     .then(itemAPIData => setFoodItemImage(itemAPIData.hints[0].food.image))
    // },[foodItem.item_name])

    return(
            <Grid item xs={3}>
                <Card>
                    <CardHeader><h2>{foodItem.item_name}</h2></CardHeader>
                    <img className="card-image" src={foodItem.image} alt={foodItem.item_name}/>
                    <h4>Type: {foodItem.type}</h4>
                    <p>Quantity: {foodItem.quantity}</p>
                </Card>
            </Grid>
    )
}

export default FoodCard;