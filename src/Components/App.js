
import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./App.css"


function App() {
  //State for the entire fridge data
  const [fridgeData, setFridgeData] = useState([])

  //State for the form on the Fridge page that allows a user to add ingredients
  const [newItemForm, newItemFormState] = useState({
      item_name : "",
      type : "",
      quantity : 0,
      image: "",
      isInFridge: true
  })

    //The state for the search bar on the Fridge page to search for ingredients in the fridge
    const [searchState, setSearchState] = useState("") 
    useEffect(()=>{
      //We're setting the fridgeData state to contain all items currently in the user's fridge in JSON DB
      fetch('http://localhost:3004/fridge')
      .then(res => res.json())
      .then(fridgeData => setFridgeData(fridgeData));
      
      // //Example FETCH CALL WITH EDAMAM
      // fetch('https://api.edamam.com/api/food-database/v2/parser?app_id=52ce18e1&app_key=94901fd21fbdbc510e92bd7736f43784&ingr=banana&nutrition-type=cooking')
      // .then(res => res.json())
      // .then(data => console.log(data));
  },[setFridgeData])
  
  return (
    <div>
      <AppBar className="navbar" position="static">
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
          <Typography id="nav-logo" variant="h6" component="div">BYOMeals</Typography>
          <Typography variant="h6" component="div">
              <Link className="nav-link" to="/fridge" Fridge>Fridge</Link>
          </Typography>
          <Typography variant="h6" component="div" >
              <Link className="nav-link" to="/recipes">Recommended Recipes</Link>
          </Typography>
          </Toolbar>
        </AppBar>

        {/* Outlet allows us to switch URL */}
        <Outlet context={[fridgeData, setFridgeData, newItemForm, newItemFormState, searchState, setSearchState]}/>
    </div>
  );
}

export default App;
