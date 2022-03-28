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
    

    return(
            <Grid item xs={12} sm={6} md={3} lg={2}>
                <Card className="food-card" >
                    <h2 className="card-header">{foodItem.item_name}</h2>
                    
                    <img className="card-image" src={foodItem.image} alt={foodItem.item_name}/><br/>
    
                    <IconButton aria-label="remove">
                        <RemoveCircleIcon/>
                    </IconButton>
                    <span>{foodItem.quantity}</span>
                    <IconButton aria-label="add">
                        <AddCircleIcon/>
                    </IconButton>
                    {/* //This is a placeholder style. We want to make it so that when an item is of x category, it turns y color. */}
                    <h4 style={{backgroundColor : "#E8FFC2", color : "black"}}>{foodItem.type}</h4>
                    
                </Card>
            </Grid>
    )
}

export default FoodCard;