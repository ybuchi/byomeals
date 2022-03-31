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
                <Button sx={{backgroundColor: "#E8E46E", color: "black"}} onClick={handleTypeSort}>Fats + Oils</Button>
                <Button sx={{backgroundColor: "#D6ECFA", color: "black"}} onClick={handleTypeSort}>Fish</Button>
                <Button sx={{backgroundColor: "#C060A1", color: "white"}} onClick={handleTypeSort}>Fruit</Button>
                <Button sx={{backgroundColor: "#F9D5BB", color: "black"}} onClick={handleTypeSort}>Grains, Nuts and Baking</Button>
                <Button sx={{backgroundColor: "#810000", color: "white"}} onClick={handleTypeSort}>Herbs and Spices</Button>
                <Button sx={{backgroundColor: "pink", color: "black"}} onClick={handleTypeSort}>Meat</Button>
                <Button sx={{backgroundColor: "#E8E2DB", color: "black"}} onClick={handleTypeSort}>Dairy</Button>
                <Button sx={{backgroundColor: "#99B19C", color: "black"}} onClick={handleTypeSort}>Poultry</Button>
                <Button sx={{backgroundColor: "#B3E283", color: "black"}} onClick={handleTypeSort}>Vegetable</Button>
                <Button sx={{backgroundColor: "#FDF6F0", color: "black"}} onClick={handleTypeSort}>Other</Button>
            </Box> 

            <Grid container spacing={1} id="ingredient-item-container">
                {mappedFoodItems}
            </Grid>
        </>
    )
}
// id="standard-basic"
export default FoodContainer;