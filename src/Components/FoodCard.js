import React from "react";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import "./FoodCard.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function FoodCard({deleteItem, foodItem, incrementQuantity, fridgeData, setFridgeData}) {
let foodTypeLabel
    switch(foodItem.type){
        
        case "Vegetable":
            foodTypeLabel = "red";
            break;
        case "Fats + Oils":
            foodTypeLabel = "olive";
            break;
        case "Fish":
            foodTypeLabel = "teal";
            break;
        case "Fruit":
            foodTypeLabel = "purple";
            break;
        case "Grains, Nuts and Baking":
            foodTypeLabel = "orange";
            break;
        case "Herbs and Spices":
            foodTypeLabel = "green";
             break;
        case "Meat":
            foodTypeLabel = "red";
            break;
        case "Dairy":
            foodTypeLabel = "ivory";
            break;
        case "Poultry":
            foodTypeLabel = "salmon";
             break;
        case "Other":
            foodTypeLabel = "gray";
            break;
        default :
            foodTypeLabel = "gray";
        
    }
    function handleClickDelete (){
        deleteItem(foodItem);
    }   
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
                    <h2 className="card-header">{foodItem.item_name}<span><IconButton onClick={handleClickDelete}><DeleteOutlineIcon /></IconButton></span></h2>
                    
                    <img className="card-image" src={foodItem.image} alt={foodItem.item_name}/><br/>
    
                    <IconButton aria-label="remove" onClick={handleClickDecrement}>
                        <RemoveCircleIcon/>
                    </IconButton>
                    <span>{foodItem.quantity}</span>
                    <IconButton aria-label="add" onClick={handleClickIncrement}>
                        <AddCircleIcon/>
                    </IconButton>
                    {/* //This is a placeholder style. We want to make it so that when an item is of x category, it turns y color. */}
                    <h4 style={{backgroundColor : {foodTypeLabel}, color : "black"}}>{foodItem.type}</h4>
                    
                </Card>
            </Grid>
    )
}

export default FoodCard;