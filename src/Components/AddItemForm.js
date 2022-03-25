import React from "react";

function AddItemForm() {
    return (
        <>
        <h2>Add Items to Your Fridge</h2>
        <form>
            <label for="item-name">Item Name: </label>
            <input type="text" name="name" id="item-name"></input> <br/>
            <label for="item-quantity">Quantity: </label>
            <input type="number" name="quantity" id="item-quantity"></input> <br/>
            <label for="item-type">Choose Item Type: </label>
            <select name="type">
                <option value="vegetable">Vegetable</option>
                <option value="meat">Meat</option>
                <option value="poultry">Poultry</option>
            </select> <br />
            <input type="submit" value="Add Item"/>
        </form>
        </>
    )
}

export default AddItemForm;