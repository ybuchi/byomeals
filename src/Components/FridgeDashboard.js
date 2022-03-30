import React from "react";
import "./FridgeDashboard.css"
import Paper from '@mui/material/Paper';

function FridgeDashboard ({fridgeData, foodInFridge}){
    return(
        
            <Paper elevation={3} className="fridge-summary-paper">
                <h2 className="fridge-title-summary">Fridge Summary</h2>
                <p><strong>Number of Items in Fridge: </strong>{foodInFridge.length}</p>
                <button>Go to Fridge</button>
            </Paper>
    )
}

export default FridgeDashboard;