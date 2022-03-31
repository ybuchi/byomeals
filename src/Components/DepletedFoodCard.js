import React from "react";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function DepletedFoodCard({ depletedIngredientObject, setFridgeData }) {
    let foodTypeLabel
    switch(depletedIngredientObject.type){
        
        case "Vegetable":
            foodTypeLabel = "vegetable";
            break;
        case "Fats + Oils":
            foodTypeLabel = "olive-oils";
            break;
        case "Fish":
            foodTypeLabel = "fish";
            break;
        case "Fruit":
            foodTypeLabel = "fruit";
            break;
        case "Grains, Nuts and Baking":
            foodTypeLabel = "grains-nuts-baking";
            break;
        case "Herbs and Spices":
            foodTypeLabel = "herbs-spices";
             break;
        case "Meat":
            foodTypeLabel = "meat";
            break;
        case "Dairy":
            foodTypeLabel = "dairy";
            break;
        case "Poultry":
            foodTypeLabel = "poultry";
             break;
        case "Other":
            foodTypeLabel = "other";
            break;
        default :
            foodTypeLabel = "";
        
    }

    function handleAddAgain(){
        //make a PATCH request and change the isInFridge state
        const configObj = {
            method : "PATCH",
            headers : {
                'Content-Type' : 'application/json',
                Accept : 'application/json'
            },
            body : JSON.stringify({...depletedIngredientObject, isInFridge : true})
        }

        fetch(`http://localhost:3004/fridge/${depletedIngredientObject.id}`, configObj)
        .then(res => res.json())
        .then(ingredientToAdd => setFridgeData((fridgeData)=> fridgeData.map((foodObject)=>{
            if(foodObject.id === ingredientToAdd.id){
                return ingredientToAdd
            }else{
                return foodObject
            }
        })))
        
    }

    function handleDeleteIngredientForever(){
        let confirmDeleteForever = window.confirm(`Are you sure you want to permanently delete ${depletedIngredientObject.item_name} from your fridge?`)

        const configObj = {
            method : "DELETE",
            headers : {
                'Content-Type' : 'application/json',
                Accept : 'application/json'
            },
            body : JSON.stringify({...depletedIngredientObject, isInFridge : true})
        }

        if(confirmDeleteForever){

        fetch(`http://localhost:3004/fridge/${depletedIngredientObject.id}`, configObj)
        .then(res => res.json())
        .then(()=> setFridgeData((fridgeData)=> fridgeData.filter(foodObject=>foodObject.id !== depletedIngredientObject.id)))
        }
    }
    return(
        <Grid item xs={12} sm={6} md={3} lg={2}>
                <Card className="food-card" >
                    <h2 className="card-header">{depletedIngredientObject.item_name}<span><IconButton onClick={handleDeleteIngredientForever}><DeleteForeverIcon /></IconButton></span></h2>
                    <img className="card-image" src={depletedIngredientObject.image} alt={depletedIngredientObject.item_name}/><br/>
    
                    <IconButton aria-label="remove">
                        
                    </IconButton>
                    <Button variant="outlined" onClick={handleAddAgain} startIcon={<AddBoxIcon />}>
                        Add Again
                    </Button>
                    {/* //This is a placeholder style. We want to make it so that when an item is of x category, it turns y color. */}
                    <h4 className={foodTypeLabel}>{depletedIngredientObject.type}</h4>
                    
                </Card>
            </Grid>
    )
}

export default DepletedFoodCard;