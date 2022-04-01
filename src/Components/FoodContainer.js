import React, { useState } from "react";
import FoodCard from "./FoodCard";
import Grid from '@mui/material/Grid';
import "./FoodContainer.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DepletedIngredients from "./DepletedIngredients";

function FoodContainer({foodInFridge, deleteItem, fridgeData, setFridgeData, incrementQuantity, decrementQuantity, searchState, setSearchState, handleSearchChange}) {
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

            <Box sx={{fontFamily: "'PT Sans', sans-serif", marginBottom : "10px", padding : "10px 20px", textAlign: "center"}}>   
                <Button sx={{backgroundColor: "#E8E46E", color: "black", marginRight: "5px"}} onClick={handleTypeSort}>Fats and Oils</Button>
                <Button sx={{backgroundColor: "#D6ECFA", color: "black", marginRight: "5px"}} onClick={handleTypeSort}>Fish</Button>
                <Button sx={{backgroundColor: "#C060A1", color: "white", marginRight: "5px"}} onClick={handleTypeSort}>Fruit</Button>
                <Button sx={{backgroundColor: "#F9D5BB", color: "black", marginRight: "5px"}} onClick={handleTypeSort}>Grains, Nuts and Baking</Button>
                <Button sx={{backgroundColor: "#810000", color: "white", marginRight: "5px"}} onClick={handleTypeSort}>Herbs and Spices</Button>
                <Button sx={{backgroundColor: "pink", color: "black", marginRight: "5px"}} onClick={handleTypeSort}>Meat</Button>
                <Button sx={{backgroundColor: "#E8E2DB", color: "black", marginRight: "5px"}} onClick={handleTypeSort}>Dairy</Button>
                <Button sx={{backgroundColor: "#99B19C", color: "black", marginRight: "5px"}} onClick={handleTypeSort}>Poultry</Button>
                <Button sx={{backgroundColor: "#B3E283", color: "black", marginRight: "5px"}} onClick={handleTypeSort}>Vegetable</Button>
                <Button sx={{backgroundColor: "#FDF6F0", color: "black", marginRight: "5px"}} onClick={handleTypeSort}>Other</Button>
            </Box> 

            <Grid container spacing={1} id="ingredient-item-container">
                {mappedFoodItems}
            </Grid>

            {/* //Depleted Items here */}
            <DepletedIngredients fridgeData = {fridgeData} setFridgeData = {setFridgeData}/>
        </>
    )
}
// id="standard-basic"
export default FoodContainer;