import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DepletedFoodCard from "./DepletedFoodCard";
import Grid from '@mui/material/Grid';





function DepletedIngredients({ fridgeData, setFridgeData }) {
    const [depletedIsExpanded, setDepletedIsExpanded] = useState(false);

    const handleDepletedAccordionExpand = (panel) => (event, isExpanded) => {
        setDepletedIsExpanded(isExpanded ? panel : false);
      };

      const depletedIngredients = fridgeData.filter((foodObject) => !foodObject.isInFridge)
      const mappedDepletedIngredients = depletedIngredients.map(depletedIngredientObject => <DepletedFoodCard key={depletedIngredientObject.id} depletedIngredientObject={depletedIngredientObject} setFridgeData={setFridgeData} />)

    return(
        <>
            <Accordion sx={{marginLeft : "40px", marginRight: "40px"}}expanded={depletedIsExpanded === 'panel1'} onChange={handleDepletedAccordionExpand('panel1')}>
                <AccordionSummary sx={{backgroundColor: "#0E185F", color : "white"}}expandIcon={<ExpandMoreIcon sx={{color: "black"}} />} aria-controls="panel1bh-content" id="panel1bh-header">
                <Typography sx={{ width: '100%', flexShrink: 0, fontFamily : "'Caveat', cursive", fontWeight: "bold", fontSize: "30px", textAlign: "center",  }}>
                    Depleted Ingredients
                </Typography>
                </AccordionSummary>
                <Grid container spacing={1}>
                {/* Map depleted ingredients here */}
                {mappedDepletedIngredients}
                </Grid>
            </Accordion>
        </>
    )
}

export default DepletedIngredients;