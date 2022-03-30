import { useState, useEffect } from "react"
import RecipeList from "./RecipeList"
import SearchBar from "./SearchBar";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FilterFridge from "./FilterFridge";
import { useOutletContext } from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const Recommended = () => {
    
    const [fridgeData, setFridgeData, newItemForm, newItemFormState, searchState, setSearchState, selectOption, setSelectOption, recRecipes, setRecRecipes] = useOutletContext()
    
    
    return (
        <Box sx={{ flexGrow:1, mt:12}}>
            <Grid container spacing={2}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
            }}>

            <FilterFridge fridgeData={fridgeData} setSelectOption={setSelectOption}/>
            </Box>
            <SearchBar />
            </Grid>
            <Grid>

            <RecipeList recRecipe={recRecipes} fridgeData={fridgeData}/>
            </Grid>

        </Box>
       
    )
    
}
export default Recommended

