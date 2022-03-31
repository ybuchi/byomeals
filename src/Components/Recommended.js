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
    const [itemSearch, setItemSearch] = useState("")
    const [fridgeData, setFridgeData, newItemForm, newItemFormState, searchState, setSearchState, selectOption, setSelectOption, recRecipes, setRecRecipes] = useOutletContext()
    const filtRecipe = recRecipes.filter(recipe => recipe.title.toLowerCase().includes(itemSearch))
    const [selectRecipe, setSelectRecipe] = useState([])
    

    function handleSelected (recipe) {
        setSelectRecipe(selectRecipe.push(recipe))
    }
    
    function updatedCookCount(recipe) {
        
                fetch (`http://localhost:3004/chicken/${recipe.id}`, {
                    method:"PATCH",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({...recipe, cookCount : recipe.cookCount + 1})
                })
                .then (req => req.json())
                .then (updatedRecipe => {
                    setRecRecipes((recRecipes)=>recRecipes.map((recipe)=>{
                        if(recipe.id === updatedRecipe.id){
                            return updatedRecipe
                        }else{
                            return recipe
                        }
                    }))
                })
            
        
    }
   
    
    return (
        <Box sx={{ flexGrow:1, mt:12}}>
            <Grid container spacing={2} justifyContent="center" alignItems='center'>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
            }}>

            <FilterFridge fridgeData={fridgeData} selectOption={selectOption} setSelectOption={setSelectOption}/>
            <SearchBar itemSearch={itemSearch} setItemSearch={setItemSearch}/>
            </Box>
            
            </Grid>
            <Grid>

            <RecipeList updatedCookCount={updatedCookCount} selectRecipe={selectRecipe} setSelectRecipe={setSelectRecipe} handleSelected={handleSelected} filtRecipe={filtRecipe} recRecipe={recRecipes} fridgeData={fridgeData}/>
            </Grid>

        </Box>
       
    )
    
}
export default Recommended

