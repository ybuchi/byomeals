
import { Outlet, Link as RouterLink } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import {useState, useEffect} from 'react'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import "./App.css"
import Drawers from './Drawers'
import { useMediaQuery } from "@material-ui/core";
import FilterFridge from "./FilterFridge"
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';






const pages = ['Home','Fridge', 'Recommended Recipes'];
function App() {
  
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const theme = useTheme();
  
  const windowSize = useMediaQuery(theme.breakpoints.down('md'))
  

  const [selectOption, setSelectOption] = useState({})
    // to grab recipes data API beginning
    const [recRecipes, setRecRecipes] = useState([])
    const data = async () => {
      // array.join(',+')
        // const req = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=b0e9cd47e90747dc899daf160fb585ef&ingredients=${selectOption[0]},${selectOption.join(',+')}&number=10`)
        const req = await fetch('http://localhost:3004/chicken')
        const res = await req.json()
        return res
    }
    useEffect(() => {
      fetch('http://localhost:3004/chicken')
      .then (req => req.json())
      .then (setRecRecipes)
    }, [])

    useEffect(() => {
      data().then((eachData) => setRecRecipes(eachData))
    }, [selectOption])
    // to grab recipes data API end

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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className="navbar" position="fixed" >
        <Container maxWidth="xl">
        <Toolbar disableGutters>
          {windowSize 
          ? 
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleOpenUserMenu}
              edge="start"
          >
              <MenuIcon />
          </IconButton> 
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          :
          null
          }
          <Typography id="nav-logo" variant="h6" component="div">BYOMeal</Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button 
            sx={{ my: 2, color: 'white', display: 'block' }}
            component={RouterLink}
            to="/"
            >
              Home
            </Button>
            <Button 
            sx={{ my: 2, color: 'white', display: 'block' }}
            component={RouterLink}
            to="fridge"
            >
              Fridge
            </Button>
            <Button 
            sx={{ my: 2, color: 'white', display: 'block' }}
            component={RouterLink}
            to="/recipes"
            >
              Recommended Recipes
            </Button>
          </Box>
          
        
        </Toolbar>
        </Container>
        </AppBar>
        {/* {windowSize ? <Drawers handleDrawerClose={handleDrawerClose} open={open}/> : null} */}
        <Outlet context={[fridgeData, setFridgeData, newItemForm, newItemFormState, searchState, setSearchState, selectOption, setSelectOption, recRecipes, setRecRecipes]}/>
      </Box>
      
  );
}

export default App;
