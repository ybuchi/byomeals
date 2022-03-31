import React from "react";
import "./RecipesDashboard.css"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



function RecipesDashboard ({fridgeData, foodInFridge}){
    return(
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper elevation={3} className="recipe-summary-paper">
                <h2 id="recipe-title-summary">Recipe Summary</h2>
                <p><strong>Number of Recipes Cooked: </strong></p>
                <p><strong>Favorite Recipes: </strong></p>
                <Box textAlign="center">
                    <Button id="recipes-button">Go to Recipe Finder</Button>
                </Box>
                
            </Paper>
        </Grid>
    )
}

export default RecipesDashboard;