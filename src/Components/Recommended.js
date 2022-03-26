import { useState, useEffect } from "react"
import RecipeList from "./RecipeList"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'

const Recommended = () => {
    const [recRecipes, setRecRecipes] = useState([])
    const data = async () => {
        const req = await fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey=b0e9cd47e90747dc899daf160fb585ef&ingredients=brocolli,+chicken&number=10')
        const res = await req.json()
        return res
    }
    useEffect(() => {
        data().then(eachData => setRecRecipes(eachData))
    }, [])

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <RecipeList recRecipe={recRecipes}/>
        </>
    )
    
}
export default Recommended

