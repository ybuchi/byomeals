import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import AddItemForm from "./AddItemForm";
import FoodContainer from "./FoodContainer";
import { styled, useTheme, makeStyles } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Toolbar from '@material-ui/core/Toolbar';
import { ClassNames } from "@emotion/react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./Fridge.css"
// import "./Fridge.css"
//My API key FDA
// YjNQFF8radU2ks6rvpawGQmyYWLbVmbLU9C5W2c0

//My API key Edamam
//Base API: https://api.edamam.com/api/food-database/v2/parser.
//Application ID: 52ce18e1
// 94901fd21fbdbc510e92bd7736f43784


function Fridge(){

    const [fridgeData, setFridgeData, newItemForm, newItemFormState, searchState, setSearchState] = useOutletContext();


    const foodInFridge = fridgeData.filter((foodObject) => {
        return foodObject.isInFridge && (foodObject.item_name.toLowerCase().trim().includes(searchState.toLowerCase().trim()) || foodObject.type.toLowerCase().trim().includes(searchState.toLowerCase().trim()));
    })

    function addNewItem(newItem){

        //If the new item name matches one that is already in the fridge, then prompt the user as to whether they want to add this item again.
        for (const foodObject of fridgeData){
            
            if(foodObject.item_name.toLowerCase().trim().includes(newItem.item_name.toLowerCase().trim()) && foodObject.isInFridge){
                //if the f
                let confirmDuplicate = window.confirm(`It seems you have a similar item in your fridge: ${foodObject.item_name}. Are you sure you want to add ${newItem.item_name} to your fridge?`)
                if(confirmDuplicate){
                    fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=52ce18e1&app_key=94901fd21fbdbc510e92bd7736f43784&ingr=${newItem.item_name.toLowerCase().trim()}&nutrition-type=cooking`)
                    .then(res => res.json())
                    .then(itemAPIData => {
                    const configObject = {
                    method: "POST",
                    headers : {
                        'Content-Type' : 'application/json',
                        Accept : 'application/json'
                    },
                    body: JSON.stringify({...newItemForm, image : itemAPIData.parsed[0].food.image})
                    }

                    fetch('http://localhost:3004/fridge', configObject)
                    .then(res => res.json())
                    .then(newFoodItem => setFridgeData([...fridgeData, newFoodItem]))
                    })
                    alert("Item Successfully Added to your Fridge!")
                } else {
                    alert("Action cancelled.")
                }
                break;
            }else if(foodObject.item_name.toLowerCase().trim().includes(newItem.item_name.toLowerCase().trim()) && !foodObject.isInFridge){
                const configObj = {
                    method : "PATCH",
                    headers : {
                        'Content-Type' : 'application/json',
                        Accept : 'application/json'
                    },
                    body : JSON.stringify({...foodObject, isInFridge : true})
                }

                fetch(`http://localhost:3004/fridge/${foodObject.id}`, configObj)
                .then(res => res.json())
                .then(foodNowInFridge => setFridgeData((fridgeData)=>fridgeData.map(((foodObject)=>{
                    if(foodObject.id===foodNowInFridge.id){
                        return foodNowInFridge
                    }else{
                        return foodObject;
                    }
                }))))
            }else{
                fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=52ce18e1&app_key=94901fd21fbdbc510e92bd7736f43784&ingr=${newItem.item_name.toLowerCase().trim()}&nutrition-type=cooking`)
                    .then(res => res.json())
                    .then(itemAPIData => {
                        const configObject = {
                            method: "POST",
                            headers : {
                                'Content-Type' : 'application/json',
                                Accept : 'application/json'
                            },
                            body: JSON.stringify({...newItemForm, image : itemAPIData.parsed[0].food.image})
                        }

                        fetch('http://localhost:3004/fridge', configObject)
                        .then(res => res.json())
                        .then(newFoodItem => setFridgeData([...fridgeData, newFoodItem]))
                    })
            }
            break;
        }

        
    }

    //A function that handles the search bar on the Fridge Page to search for ingredients or ingredient types
    function handleSearchChange (e) {
        setSearchState(e.target.value);
    }

    //A function that handles the Ingredient Type filter buttons on the Fride Page
    function handleIngredientTypeFilter(ingredientType){
        
    }

    function deleteItem(foodItemToDelete){
        console.log(foodItemToDelete);
        const configObj = {
            method: "PATCH",
            headers: {
                'Content-Type' : 'application/json',
                Accept: 'application.json'
            },
            body: JSON.stringify({...foodItemToDelete, isInFridge : false})
        }

        fetch(`http://localhost:3004/fridge/${foodItemToDelete.id}`, configObj)
        .then(res => res.json())
        .then(deletedItem => setFridgeData((fridgeData) => fridgeData.map((foodObject) => {
            if(foodObject.id === deletedItem.id){
                return deletedItem
            }else{
                return foodObject
            }
        })));
    }

    function incrementQuantity(foodItemToIncrement){

        const configObj ={
            method: "PATCH",
            headers: {
                'Content-Type': "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(foodItemToIncrement)
        }

        fetch(`http://localhost:3004/fridge/${foodItemToIncrement.id}`, configObj)
        .then(res => res.json())
        .then(updatedFoodItem => setFridgeData((fridgeData) => fridgeData.map((foodObject)=>{
            if (updatedFoodItem.id === foodObject.id){
                return updatedFoodItem
            }else{
                return foodObject
            }
        })));
    }


    return(
        <>
        <Box sx={{ flexGrow:1, mt:8}}>

        <Grid>
            <h1 className="main-title">Fridge</h1>
            <AddItemForm newItemForm={newItemForm} 
                         newItemFormState={newItemFormState} 
                         addNewItem={addNewItem}/>
            <FoodContainer searchState={searchState} 
                           setSearchState={setSearchState}
                           handleSearchChange={handleSearchChange} 
                           handleIngredientTypeFilter={handleIngredientTypeFilter}
                           foodInFridge ={foodInFridge} 
                           deleteItem={deleteItem} 
                           setFridgeData={setFridgeData} 
                           fridgeData={fridgeData} 
                           incrementQuantity={incrementQuantity} />
        </Grid>  
        
        </Box>
        </>
        
    )
}

export default Fridge;