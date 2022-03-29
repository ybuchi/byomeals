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


const Recommended = () => {
    const [selectOption, setSelectOption] = useState({})
    // to grab recipes data API beginning
    const [recRecipes, setRecRecipes] = useState([])
    const data = async () => {
        // const req = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=b0e9cd47e90747dc899daf160fb585ef&ingredients=${selectOption.item_name}&number=10`)
        const req = await fetch('http://localhost:5001/recipes')
        const res = await req.json()
        return res
    }
    useEffect(() => {
        data().then(eachData => setRecRecipes(eachData))
    }, [selectOption])
    // to grab recipes data API end

    // to grab Fridge Data begining
    const fridgeData = async () => {
        const req = await fetch ('http://localhost:3001/fridge')
        const res = req.json()
        return res
    }
    const [fridgeStock, setFridgeStock] = useState([])
    useEffect(()=> {
        fridgeData().then(setFridgeStock)
    }, [])
    // to grab Fridge Data end

    return (
        <>
            <RecipeList recRecipe={recRecipes} fridgeStock={fridgeStock}/>
        </>
    )
    
}
export default Recommended

