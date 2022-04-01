import React from "react";
import "./RecipesDashboard.css"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link as RouterLink, useOutletContext } from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import List from '@mui/material/List';
import { ListSubheader, Typography } from "@mui/material";



function RecipesDashboard ({recRecipes, setRecRecipes}){
    
    const count = recRecipes.map(recipe => recipe.cookCount)
    const sumRecipes = count.reduce((a, b) => a + b, 0)
    const likes = recRecipes.filter(recipe=>recipe.isFavorite).map(each => {
        return (
            <ListItem key={each.title}>
                <ListItemText primary={each.title} primaryTypographyProps={{fontSize: '13px'}}/>
            </ListItem>
            )
    })
    

    

    return(
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper elevation={3} className="recipe-summary-paper">
                <h2 id="recipe-title-summary">Recipe Summary</h2>
                <p><strong>Number of Recipes Cooked: {sumRecipes}</strong></p>
                <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                }}
                subheader={<li />}
                >
                    <li>
                        <ul>
                            <ListSubheader>My Favorite Recipes</ListSubheader>
                            {likes}
                        </ul>
                    </li>
                </List>
                <Box textAlign="center">
                    <Button id="recipes-button" component={RouterLink} to="/recipes">Go to Recipe Finder</Button>
                </Box>
                
            </Paper>
        </Grid>
    )
}

export default RecipesDashboard;