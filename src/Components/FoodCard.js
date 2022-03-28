import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import "./FoodCard.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';

function FoodCard({foodItem}) {

    // //Currently only using this useEffect to get the pictures of the food items
    // useEffect(()=>{
    //     fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=52ce18e1&app_key=94901fd21fbdbc510e92bd7736f43784&ingr=${foodItem.item_name.trim()}&nutrition-type=cooking`)
    //     .then(res=> res.json())
    //     .then(itemAPIData => setFoodItemImage(itemAPIData.hints[0].food.image))
    // },[foodItem.item_name])

    return(
            <Grid item xs={12} sm={6} md={3} lg={2}>
                <Card style={{backgroundColor : "#E8FFC2", color: "black"}}>
                    <CardHeader className="card-header" title={foodItem.item_name}/>
                    
                    <img className="card-image" src={foodItem.image} alt={foodItem.item_name}/>
                    
                    <h4>{foodItem.type}</h4>
                    <IconButton aria-label="remove">
                        <RemoveCircleIcon/>
                    </IconButton>
                    <span>Quantity: {foodItem.quantity}</span>
                    <IconButton aria-label="add">
                        <AddCircleIcon/>
                    </IconButton>
                    
                    
                </Card>
            </Grid>
    )
}

export default FoodCard;