import React from "react";
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';





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
            <form onSubmit={handleNewItemSubmit}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
                    <Grid container spacing={1}>
                        <Grid item sm={4}>
                            {/* Item Name */}
                                <TextField onChange={handleOnChange} type="text" name="item_name" id="item_name" label="Ingredient Name" value={newItemForm.item_name}></TextField> <br/>
                        </Grid>
                        <Grid item sm={4}>
                            {/* Item Quantity */}
                            <FormGroup >
                                <TextField onChange={handleOnChange} type="number" name="quantity" id="quantity" value={newItemForm.quantity} label="Quantity"></TextField> <br/>
                            </FormGroup>
                        </Grid>
                        <Grid item sm={4}>
                            {/* Item Type */}
                            <InputLabel id="type">Item Type: </InputLabel>
                            <select onChange={handleOnChange} name="type" labelid="type" value={newItemForm.type}>
                                <option value="Vegetable">Vegetable</option>
                                <option value="Meat">Meat</option>
                                <option value="Poultry">Poultry</option>
                            </select> <br />
                        </Grid>
                    </Grid>
                </Grid>
                        
                            
                        <Button className="font-ptsans-bold" type="submit" value="Add Item" style={{backgroundColor : "#56BBF1"}}>Add Item</Button>
            </form>
        </div>

    )
}

export default AddItemForm;