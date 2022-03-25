import React from "react";

function AddItemForm({newItemForm, newItemFormState, addNewItem}) {

    function handleOnChange(e){
        newItemFormState({...newItemForm, [e.target.name]:e.target.value})
    }

    function handleNewItemSubmit(e){
        e.preventDefault();
        addNewItem(newItemForm)
    }
    return (
        <>
            <h2>Add Items to Your Fridge</h2>
            <form onSubmit={handleNewItemSubmit}>
                {/* Item Name */}
                <label htmlFor="item-name">Item Name: </label>
                <input onChange={handleOnChange} type="text" name="item_name" id="item_name" value={newItemForm.item_name}></input> <br/>

                {/* Item Quantity */}
                <label htmlFor="item-quantity">Quantity: </label>
                <input onChange={handleOnChange} type="number" name="quantity" id="item-quantity" value={newItemForm.quantity}></input> <br/>

                {/* Item Type */}
                <label htmlFor="item-type">Choose Item Type: </label>
                <select onChange={handleOnChange} name="type" value={newItemForm.type}>
                    <option value="Vegetable">Vegetable</option>
                    <option value="Meat">Meat</option>
                    <option value="Poultry">Poultry</option>
                </select> <br />

                <input type="submit" value="Add Item"/>
            </form>
        </>
    )
}

export default AddItemForm;