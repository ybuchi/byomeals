import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




import "./AddItemForm.css"

function AddItemForm({newItemForm, newItemFormState, addNewItem}) {
    const [expanded, setExpanded] = useState(false);

    const handleAccordionExpand = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

    function handleOnChange(e){
        newItemFormState({...newItemForm, [e.target.name]:e.target.value})
    }

    function handleNewItemSubmit(e){
        e.preventDefault();
        addNewItem(newItemForm);
    }
    return (
        <>
        <Accordion sx={{marginLeft : "40px", marginRight: "40px"}}expanded={expanded === 'panel1'} onChange={handleAccordionExpand('panel1')}>
            <AccordionSummary sx={{backgroundColor: "#C9CCD5"}}expandIcon={<ExpandMoreIcon sx={{color: "black"}} />} aria-controls="panel1bh-content" id="panel1bh-header">
            <Typography sx={{ width: '100%', flexShrink: 0, fontFamily : "'Caveat', cursive", fontWeight: "bold", fontSize: "30px", textAlign: "center",  }}>
                Add Items to Fridge
            </Typography>
            </AccordionSummary>
            <div className="form-container font-ptsans-bold">
                <form onSubmit={handleNewItemSubmit}>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={5}>
                                {/* Item Name */}
                                    <TextField onChange={handleOnChange} type="text" name="item_name" style={{width: "100%"}} id="item_name" label="Ingredient Name" value={newItemForm.item_name}></TextField> <br/>
                            </Grid>
                            <Grid item xs={6} sm={2}>
                                {/* Item Quantity */}
                                <FormGroup >
                                    <TextField onChange={handleOnChange} type="number" name="quantity" style={{width: "50%", margin: "auto"}} id="quantity" value={newItemForm.quantity} label="Quantity"></TextField> <br/>
                                </FormGroup>
                            </Grid>
                            <Grid item xs={6} sm={5}>
                                <FormControl required sx={{minWidth: "100%"}}>
                                    <InputLabel id="ingredient-type">Type</InputLabel>
                                    <Select
                                        labelId="ingredient-type"
                                        id="ingredient-type"
                                        name="type"
                                        value={newItemForm.type}
                                        onChange={handleOnChange}
                                        autoWidth
                                        label="Type"
                                    >
                                        <MenuItem value="">
                                            <em>Fats and Oils</em>
                                        </MenuItem>
                                        <MenuItem value="Fats and Oils">Fats + Oils</MenuItem>
                                        <MenuItem value="Fish">Fish</MenuItem>
                                        <MenuItem value="Fruit">Fruit</MenuItem>
                                        <MenuItem value="Grains, Nuts and Baking">Grains, Nuts and Baking</MenuItem>
                                        <MenuItem value="Herbs and Spices">Herbs and Spices</MenuItem>
                                        <MenuItem value="Meat">Meat</MenuItem>
                                        <MenuItem value="Dairy">Dairy</MenuItem>
                                        <MenuItem value="Poultry">Poultry</MenuItem>
                                        <MenuItem value="Vegetable">Vegetable</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>  
                
                            <Button className="font-ptsans-bold" type="submit" value="Add Item" style={{backgroundColor : "#56BBF1"}} id="btn-add-item">Add Item</Button>
                </form>
            </div>
        </Accordion>
        </>

    )
}

export default AddItemForm;