import React, { useState, useEffect } from "react";
import AddItemForm from "./AddItemForm";
import FoodContainer from "./FoodContainer";

//My API key FDA
// YjNQFF8radU2ks6rvpawGQmyYWLbVmbLU9C5W2c0

//My API key Edamam
//Base API: https://api.edamam.com/api/food-database/v2/parser.
//Application ID: 52ce18e1
// 94901fd21fbdbc510e92bd7736f43784



function Fridge(){
    const [fridgeData, setFridgeData] = useState([])
    const [newItemForm, newItemFormState] = useState({
        item_name : "",
        type : "",
        quantity : 0,
        image: "",
        isInFridge: true
    })
    const [searchState, setSearchState] = useState("") 
    const foodInFridge = fridgeData.filter((foodObject) => {
        return foodObject.isInFridge && (foodObject.item_name.toLowerCase().trim().includes(searchState.toLowerCase().trim()) || foodObject.type.toLowerCase().trim().includes(searchState.toLowerCase().trim()));
    })

    function addNewItem(newItem){
 
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

    useEffect(()=>{
        //We're setting the fridgeData state to contain all items currently in the user's fridge in JSON DB
        fetch('http://localhost:3004/fridge')
        .then(res => res.json())
        .then(fridgeData => setFridgeData(fridgeData));
        
        // //Example FETCH CALL WITH EDAMAM
        // fetch('https://api.edamam.com/api/food-database/v2/parser?app_id=52ce18e1&app_key=94901fd21fbdbc510e92bd7736f43784&ingr=banana&nutrition-type=cooking')
        // .then(res => res.json())
        // .then(data => console.log(data));
    },[])

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
            <AddItemForm newItemForm={newItemForm} 
                         newItemFormState={newItemFormState} 
                         addNewItem={addNewItem}/>
            <FoodContainer searchState={searchState} 
                           handleSearchChange={handleSearchChange} 
                           foodInFridge ={foodInFridge} 
                           deleteItem={deleteItem} 
                           setFridgeData={setFridgeData} 
                           fridgeData={fridgeData} 
                           incrementQuantity={incrementQuantity} />
        </>
    )
}

export default Fridge;