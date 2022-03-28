import React from "react";
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { grid } from '@mui/system';



import "./AddItemForm.css"

function AddItemForm({newItemForm, newItemFormState, addNewItem}) {

    function handleOnChange(e){
        newItemFormState({...newItemForm, [e.target.name]:e.target.value})
    }

    function handleNewItemSubmit(e){
        e.preventDefault();
        addNewItem(newItemForm)
    }
    return (
        <div className="form-container font-ptsans-bold">
            <h2 className="font-caveat label">Add Items to Your Fridge</h2>
            <FormControl onSubmit={handleNewItemSubmit}>

                {/* Item Name */}
                <FormGroup className="mb-3">
                    <InputLabel htmlFor="item-name">Item Name: </InputLabel>
                    <Input className="control-box" onChange={handleOnChange} type="text" name="item_name" id="item_name" value={newItemForm.item_name}></Input> <br/>
                </FormGroup>
                {/* Item Quantity */}
                <FormGroup className="mb-3">
                    <InputLabel htmlFor="item-quantity">Quantity: </InputLabel>
                    <Input className="control-box" onChange={handleOnChange} type="number" name="quantity" id="item-quantity" value={newItemForm.quantity}></Input> <br/>
                </FormGroup>
                        <FormGroup className="mb-3">
                            {/* Item Type */}
                            <InputLabel htmlFor="type">Choose Item Type: </InputLabel>
                            <select onChange={handleOnChange} name="type" value={newItemForm.type}>
                                <option value="Vegetable">Vegetable</option>
                                <option value="Meat">Meat</option>
                                <option value="Poultry">Poultry</option>
                            </select> <br />
                        </FormGroup>
                        <Button className="font-ptsans-bold" type="submit" value="Add Item" style={{backgroundColor : "#56BBF1"}}>Add Item</Button>
            </FormControl>
        </div>

    )
}

export default AddItemForm;