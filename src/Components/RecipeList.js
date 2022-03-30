import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import ActionCard from './ActionCard'
import ContentCard from './ContentCard';


const useStyles = makeStyles({
    recipeContainer:{
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px"
    }
})
const RecipeList = ({recRecipe, fridgeData}) => {
    const classes = useStyles()
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    }));
      
    
    
    const eachRecipe = (recipe) => {
        const {title, image, id, usedIngredients, missedIngredients, missedIngredientCount, usedIngredientCount} = recipe
        
        return (
        <Grid item xs={4} key={id}>
            <Card xs={{ height: '100%', display: 'flex', flexDirection: 'column', maxWidth: 350 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings" onClick={e=>console.log(e.target)}>
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={title}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt={title}
                />
                <CardContent>
                    {/* <ContentCard recipe={recipe}/> */}
                    <Typography variant="subtitle2" color="text.secondary">
                    Fridge Ingredients ({usedIngredientCount}): 
                    </Typography >
                    
                    <Typography variant="caption" color="GrayText.secondary">
                    {usedIngredients.map(used => {
                                            return (
                                                <li key={used.name}>
                                                    {used.original}
                                                </li>
                                            )
                                        })}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                    Missing Ingredients ({missedIngredientCount}): 
                    </Typography>
                    <Typography variant="caption" color="GrayText.secondary">
                    {missedIngredients.map(missing => {
                        return (
                            <li key={missing.name}>
                                {missing.original}
                            </li>
                        )
                    })}
                    </Typography>
                </CardContent>
                <ActionCard recipe={recipe} fridgeData={fridgeData}/>
            </Card>
        </Grid>
        )
    }
    
    return (
        <Grid container spacing={3} className={classes.recipeContainer}>
            {recRecipe.map(recipe => {
                return eachRecipe(recipe)
            })}
        </Grid>
    )
}
export default RecipeList