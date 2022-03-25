import React from "react";
import AddItemForm from "./AddItemForm";

function Fridge(){
    //NESTED COMPONENTS
    //1. A form where the user can input their individual fridge items
    //2. Cards for individual components that will display each item (use API to fetch images)
    //3. Ability to add quantity (update) or delete items (delete)
    return(
        <>
            <AddItemForm />
            <h1>Your Fridge: </h1>
        </>
    )
}

export default Fridge;