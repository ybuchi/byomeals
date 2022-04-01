
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';



const Ingredients = ({recipe, fridgeData}) => {
    
  const {id} = recipe
  const [ingredient, setIngredient] = useState([])

  const igreData = async () => {
      const req = await fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=b0e9cd47e90747dc899daf160fb585ef`)
    //   const req = await fetch('http://localhost:3004/data')
      const res = await req.json()
      return res
  }
  useEffect(() => {
      igreData().then(setIngredient)
  }, [])

  const Root = styled('div')(({ theme }) => ({
      width: '100%',
      ...theme.typography.body2,
      '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
      },
    }));

  const instruction = ingredient.map(instructions =>instructions.steps.map(step => {
      return (
          <>
          <div>
              {step.step}
          </div>
          <Divider></Divider>
          </>
      )
  }))
  return (
      <Root>
          {instruction}
      </Root>

  )
    
}
export default Ingredients