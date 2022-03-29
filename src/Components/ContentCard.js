import CardContent from '@mui/material/CardContent';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
const ContentCard = ({recipe}) => {
    const {id} = recipe
    const [nutFact, setNutFact] = useState([])
    const summaryData = async () => {
        // const req = await fetch('http://localhost:5001/summary')
        const req = await fetch(`https://api.spoonacular.com/recipes/4632/information?apiKey=b0e9cd47e90747dc899daf160fb585ef`)
        const res = await req.json()
        return res
    }
    useEffect(()=> {
        summaryData().then(setNutFact)
    }, [])
   
    const gluten = nutFact.glutenFree ? null : <img style={{width:"30px"}} src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-gluten-free-bakery-flaticons-lineal-color-flat-icons.png"/>
    const dairy = nutFact.dairyFree ? null : <img style={{width:"30px"}} src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-dairy-free-vegan-and-vegetarian-flaticons-lineal-color-flat-icons.png"/>
    return (
        <>
        {gluten}
        {dairy}
        </>
           
    )
    
}
export default ContentCard