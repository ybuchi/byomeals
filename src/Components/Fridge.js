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
        type : "Vegetable",
        quantity : 0
    })


    function addNewItem(newItem){
        //TO DO: Make a fetch request to edamam API and use newItem item name to populate query.

        const configObject = {
            method: "POST",
            headers : {
                'Content-Type' : 'application/json',
                Accept : 'application/json'
            },
            body: JSON.stringify(newItem)
        }

        fetch('http://localhost:3004/fridge', configObject)
        .then(res => res.json())
        .then(newFoodItem => setFridgeData([...fridgeData, newFoodItem]))

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
    //NESTED COMPONENTS
    //1. A form where the user can input their individual fridge items
    //2. Cards for individual components that will display each item (use API to fetch images)
    //3. Ability to add quantity (update) or delete items (delete)
    return(
        <>
            <AddItemForm newItemForm={newItemForm} newItemFormState={newItemFormState} addNewItem={addNewItem}/>
            <FoodContainer fridgeData={fridgeData} setFridgeData={setFridgeData}/>
            
        </>
    )
}

export default Fridge;