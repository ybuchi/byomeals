import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./FridgeDashboard.css"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FridgeDashboardTable from "./FridgeDashboardTable";


function FridgeDashboard ({fridgeData, foodInFridge, depletedFoods}){
    const oils = foodInFridge.filter(ingredient=>ingredient.type === "Fats and Oils")
    const fish = foodInFridge.filter(ingredient=>ingredient.type === "Fish")
    const fruit = foodInFridge.filter(ingredient=>ingredient.type === "Fruit")
    const nutsAndBaking = foodInFridge.filter(ingredient=>ingredient.type === "Grains, Nuts and Baking")
    const spices = foodInFridge.filter(ingredient=>ingredient.type === "Herbs and Spices")
    const meat = foodInFridge.filter(ingredient=>ingredient.type === "Meat")
    const poultry = foodInFridge.filter(ingredient=>ingredient.type === "Poultry")
    const vegetables = foodInFridge.filter(ingredient=>ingredient.type === "Vegetable")
    const other = foodInFridge.filter(ingredient=>ingredient.type === "Other")
    const dairy = foodInFridge.filter(ingredient=>ingredient.type === "Dairy")

    const summaryDataObject = {
        oils : oils,
        fish : fish, 
        fruit : fruit,
        nuts : nutsAndBaking,
        spices : spices,
        meat : meat, 
        poultry : poultry,
        vegetables : vegetables,
        dairy : dairy,
        other : other
    }
    return(
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper elevation={3} className="fridge-summary-paper">
                <h2 className="fridge-title-summary">Fridge Summary</h2>

                <Grid container spacing={1}>
                    <Grid item xs={6}>
                    <div className="numberOf-itemsInFridge">
                        <h2 className="number-label">{foodInFridge.length}</h2>
                        <p><strong>Items in Fridge</strong></p>
                    </div>
                    </Grid>
                    <Grid item xs={6}>
                    <div className="numberOf-itemsInFridge">
                        <h2 className="number-label">{depletedFoods.length}</h2>
                        <p><strong>Depleted Ingredients</strong></p>
                    </div>
                    </Grid>
                </Grid>

                {/* Map through ingredient types */}
                <FridgeDashboardTable summaryDataObject={summaryDataObject} />
                <Box textAlign="center" >
                    <Button sx={{backgroundColor: "#00FFDD", color: "black", marginTop : "5px"}} id="fridge-button" component={RouterLink} to="/fridge">Go to Fridge</Button>
                </Box>
            </Paper>
        </Grid>
    )
}

export default FridgeDashboard;