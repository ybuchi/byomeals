import React from "react";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import "./FoodCard.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';

function FoodCard({foodItem, incrementQuantity, decrementQuantity}) {

    function handleClickIncrement(e){
        const updatedFoodItem = {...foodItem, quantity : ++foodItem.quantity}
         incrementQuantity(updatedFoodItem)
    }
    function handleClickDecrement(e) {
        const updatedFoodItem = {...foodItem, quantity : --foodItem.quantity}
        incrementQuantity(updatedFoodItem)
    }
    return(
            <Grid item xs={12} sm={6} md={3} lg={2}>
                <Card className="food-card" >
                    <h2 className="card-header">{foodItem.item_name}</h2>
                    
                    <img className="card-image" src={foodItem.image} alt={foodItem.item_name}/><br/>
    
                    <IconButton aria-label="remove" onClick={handleClickDecrement}>
                        <RemoveCircleIcon/>
                    </IconButton>
                    <span>{foodItem.quantity}</span>
                    <IconButton aria-label="add" onClick={handleClickIncrement}>
                        <AddCircleIcon/>
                    </IconButton>
                    {/* //This is a placeholder style. We want to make it so that when an item is of x category, it turns y color. */}
                    <h4 style={{backgroundColor : "#E8FFC2", color : "black"}}>{foodItem.type}</h4>
                    
                </Card>
            </Grid>
    )
}

export default FoodCard;