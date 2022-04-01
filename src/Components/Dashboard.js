import React from "react";
import { useOutletContext } from "react-router-dom";
import FridgeDashboard from "./FridgeDashboard";
import RecipesDashboard from "./RecipesDashboard";
import "./Dashboard.css"
import Grid from '@mui/material/Grid';
import SetMealIcon from '@mui/icons-material/SetMeal';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import IcecreamIcon from '@mui/icons-material/Icecream';
import EggAltIcon from '@mui/icons-material/EggAlt';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import KitchenIcon from '@mui/icons-material/Kitchen';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';



function Dashboard() {
    const [fridgeData, setFridgeData, newItemForm, newItemFormState, searchState, setSearchState] = useOutletContext();

    const foodInFridge = fridgeData.filter((foodObject) => {
        return foodObject.isInFridge && (foodObject.item_name.toLowerCase().trim().includes(searchState.toLowerCase().trim()) || foodObject.type.toLowerCase().trim().includes(searchState.toLowerCase().trim()));
    })
    const depletedFoods = fridgeData.filter(foodObject=>!foodObject.isInFridge);

    return(
        <>  
            <div className="jumbo">
                <h1 className="title">Welcome to BYOMeals</h1>
                <h3 className="subtitle">
                    Cook. Eat. Repeat.
                    <br/>
                    <div style={{textAlign: "center"}}>
                        <SetMealIcon sx={{margin: "5px 10px", color : "#630606"}} />
                        <RestaurantIcon sx={{margin: "5px 10px", color : "#890F0D"}} />
                        <IcecreamIcon sx={{margin: "5px 10px", color : "#E83A14"}} />
                        <EggAltIcon sx={{margin: "5px 10px", color : "#D9CE3F"}} />
                        <OutdoorGrillIcon sx={{margin: "5px 10px"}} />
                        <KitchenIcon sx={{margin: "5px 10px"}} />
                        <SoupKitchenIcon sx={{margin: "5px 10px"}} />
                    </div>
                </h3>
                
            </div>

            <Grid container spacing={1} id="dashboards-container">
                <FridgeDashboard fridgeData={ fridgeData } foodInFridge={foodInFridge} depletedFoods={depletedFoods}/>
                <RecipesDashboard />
            </Grid>

            
        </>
    )
}

export default Dashboard;