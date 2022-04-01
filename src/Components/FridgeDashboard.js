import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./FridgeDashboard.css"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function FridgeDashboard ({fridgeData, foodInFridge, depletedFoods}){
    
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
                <Box textAlign="center">
                    <Button id="fridge-button" component={RouterLink} to="/fridge">Go to Fridge</Button>
                </Box>
            </Paper>
        </Grid>
    )
}

export default FridgeDashboard;