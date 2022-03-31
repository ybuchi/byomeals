import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import AddItemForm from "./AddItemForm";
import FoodContainer from "./FoodContainer";
// import { styled, useTheme, makeStyles } from '@mui/material/styles';
// import Container from '@mui/material/Container';
// import Toolbar from '@material-ui/core/Toolbar';
// import { ClassNames } from "@emotion/react";
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
        //Define variables to keep track of item matches in loop
            let totalCount = fridgeData.length;
            let checkCount = 0;

        //If the new item name matches one that is already in the fridge, then prompt the user as to whether they want to add this item again.
        for (const foodObject of fridgeData){
            
            
            if(foodObject.item_name.toLowerCase().trim().includes(newItem.item_name.toLowerCase().trim()) && foodObject.isInFridge){
                console.log("Item matches and is in Fridge!")
                let confirmDuplicate = window.confirm(`It seems you've already used: ${foodObject.item_name}. Are you sure you want to add ${newItem.item_name} to your fridge?`)
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
                }
                break;
            }else if(foodObject.item_name.toLowerCase().trim().includes(newItem.item_name.toLowerCase().trim()) && !foodObject.isInFridge){
                let confirmRecycleIngredient = window.confirm(`It seems you've already used: ${foodObject.item_name}. Do you want to pull ${newItem.item_name} back into your fridge?`)
                if(confirmRecycleIngredient){
                    
                    const configObject = {
                    method: "PATCH",
                    headers : {
                        'Content-Type' : 'application/json',
                        Accept : 'application/json'
                    },
                    body: JSON.stringify({...foodObject, isInFridge : true})
                    }

                    fetch(`http://localhost:3004/fridge/${foodObject.id}`, configObject)
                    .then(res => res.json())
                    .then(recycledFoodItem => setFridgeData(fridgeData.map((ingredientObject)=>{
                        if(ingredientObject.id === recycledFoodItem.id){
                           return recycledFoodItem;
                        }else{
                            return ingredientObject;
                        }
                    })))
                }
                break;
            }else{
                checkCount += 1;
                if(checkCount === totalCount){
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
                }else{
                    continue;
                }
            }


        }

        
    }

    //A function that handles the search bar on the Fridge Page to search for ingredients or ingredient types
    function handleSearchChange (e) {
        setSearchState(e.target.value);
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