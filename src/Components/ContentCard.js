import CardContent from '@mui/material/CardContent';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ContentCard = ({recipe, updatedCookCount}) => {
    const {id, cookCount} = recipe
    const [nutFact, setNutFact] = useState([])
    
    // const summaryData = async () => {
    //     const req = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b0e9cd47e90747dc899daf160fb585ef`)
    //     const res = await req.json()
    //     return res
    // }
    // useEffect(()=> {
    //     summaryData().then(setNutFact)
    // }, [])
   
    const gluten = nutFact.glutenFree ? null : <img style={{width:"30px"}} src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-gluten-free-bakery-flaticons-lineal-color-flat-icons.png"/>
    const dairy = nutFact.dairyFree ? null : <img style={{width:"30px"}} src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-dairy-free-vegan-and-vegetarian-flaticons-lineal-color-flat-icons.png"/>

    function handleClick(e) {
        updatedCookCount(recipe)
    }
    return (
        <Box sx={{ width: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 8">
                    {gluten}
                    {dairy}
            </Box>
            <Box gridColumn="span 4">
                 <Button variant="outlined" size="small" onClick={handleClick}>Cook Count: {cookCount} </Button>
            </Box> 

            </Box>
        </Box>
        
           
    )
    
}
export default ContentCard