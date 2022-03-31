import React, { useState } from "react";
import FoodCard from "./FoodCard";
import Grid from '@mui/material/Grid';
import "./FoodContainer.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';




function FoodContainer({foodInFridge, deleteItem, fridgeData, setFridgeData, incrementQuantity, decrementQuantity, searchState, setSearchState, handleSearchChange, handleIngredientTypeFilter}) {
    const [ingredientTypeFilterIsClicked, setIngredientTypeFilterIsClicked] = useState(false)
    let mappedFoodItems = foodInFridge.map((foodItem) => <FoodCard 
                                                            key={foodItem.id} 
                                                            foodItem={foodItem} 
                                                            deleteItem={deleteItem}
                                                            fridgeData={fridgeData}
                                                            setFridgeData={setFridgeData}
                                                            incrementQuantity={incrementQuantity} 
                                                            decrementQuantity={decrementQuantity}/>
    )  

    function handleTypeSort(e){
        const ingredientType =  e.target.innerText.toLowerCase();

        if(ingredientTypeFilterIsClicked){
            setIngredientTypeFilterIsClicked(!ingredientTypeFilterIsClicked)
            setSearchState("")
        }else{
            setIngredientTypeFilterIsClicked(!ingredientTypeFilterIsClicked)
            setSearchState(ingredientType)
        }
    }
       
    return(
        <>
            <TextField 
                className="ingredient-search"
                label="Search by Ingredient or Ingredient Type"
                InputProps={{style:{fontSize : "25px", fontFamily : "'PT Sans', sans-serif", margin: "20px 30px", height : "50px"}}}
                InputLabelProps={{style: {fontSize : "20px", fontFamily : "'PT Sans', sans-serif", margin:"20px 30px"}}} 
                variant="standard"
                onChange={handleSearchChange}
                value={searchState} />

            <Box sx={{fontFamily: "'PT Sans', sans-serif", marginBottom : "10px", padding : "10px 20px"}}>   
                <Button className="filter-button" onClick={handleTypeSort}>Fats + Oils</Button>
                <Button className="filter-button" onClick={handleTypeSort}>Fish</Button>
                <Button className="filter-button" onClick={handleTypeSort}>Fruit</Button>
                <Button className="filter-button" onClick={handleTypeSort}>Grains, Nuts and Baking</Button>
                <Button className="filter-button" onClick={handleTypeSort}>Herbs and Spices</Button>
                <Button className="filter-button" onClick={handleTypeSort}>Meat</Button>
                <Button className="filter-button" onClick={handleTypeSort}>Dairy</Button>
                <Button className="filter-button" onClick={handleTypeSort}>Poultry</Button>
                <Button className="filter-button" onClick={handleTypeSort}>Vegetable</Button>
                <Button className="filter-button" onClick={handleTypeSort}>Other</Button>
            </Box> 

            <Grid container spacing={1} id="ingredient-item-container">
                {mappedFoodItems}
            </Grid>
        </>
    )
}
// id="standard-basic"
export default FoodContainer;