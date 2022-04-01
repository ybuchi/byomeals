
import { Outlet, Link as RouterLink } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import {useState, useEffect} from 'react'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import "./App.css"
import { useMediaQuery } from "@material-ui/core";
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';


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
  

  const [selectOption, setSelectOption] = useState([])
  // console.log(selected.join(',+'))
  // to grab recipes data API beginning
  const [recRecipes, setRecRecipes] = useState([])
  const data = async () => {
      const selected = selectOption.map(option => option.item_name)
      // array.join(',+')
        // const req = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=b0e9cd47e90747dc899daf160fb585ef&ingredients=${selected.join(',+')}&number=10`)
        const req = await fetch('http://localhost:3004/chicken')
        const res = await req.json()
        return res
    }
    // useEffect(() => {
    //   fetch('http://localhost:3004/chicken')
    //   .then (req => req.json())
    //   .then (setRecRecipes)
    // }, [])

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

    //Fetching ingredients in fridge from JSON DB and saving them to state
    useEffect(()=>{
      //We're setting the fridgeData state to contain all items currently in the user's fridge in JSON DB
      fetch('http://localhost:3004/fridge')
      .then(res => res.json())
      .then(fridgeData => setFridgeData(fridgeData));
  },[setFridgeData])

  
  return (
    <>
    <Box sx={{ display: 'flex', backgroundColor: '#0E185F' }}>
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
              <ListItem button component={RouterLink} to="/">
                <ListItemText>Home</ListItemText>
              </ListItem>
              <ListItem button component={RouterLink} to="fridge">
                <ListItemText>Fridge</ListItemText>
              </ListItem>
              <ListItem button component={RouterLink} to="/recipes">
                <ListItemText>Recommended Recipes</ListItemText>
            </ListItem>
            </Menu>
          </Box>
          :
          null
          }
          <Typography id="nav-logo" variant="h6" component="div"><span id="nav-logo-span">BYO</span>Meals</Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button 
            sx={{ my: 2, mx: 3, fontFamily: "'PT Sans', sans-serif", fontWeight : "bold", color: 'white', display: 'block' }}
            component={RouterLink}
            to="/"
            >
              Home
            </Button>
            <Button 
            sx={{ my: 2, mx:3, fontFamily: "'PT Sans', sans-serif", fontWeight : "bold", color: 'white', display: 'block' }}
            component={RouterLink}
            to="fridge"
            >
              Fridge
            </Button>
            <Button  
            sx={{ my: 2, mx: 3, fontFamily: "'PT Sans', sans-serif", fontWeight : "bold", color: 'white', display: 'block' }}
            component={RouterLink}
            to="/recipes"
            >
              Recommended Recipes
            </Button>
          </Box>
        </Toolbar>
        </Container>
        </AppBar>
      </Box>
      {/* MAKE SURE TO KEEP THIS OUTSIDE OF BOX COMPONENT */}
       <Outlet context={[fridgeData, setFridgeData, newItemForm, newItemFormState, searchState, setSearchState, selectOption, setSelectOption, recRecipes, setRecRecipes]}/>
      </>
      
  );
}

export default App;
