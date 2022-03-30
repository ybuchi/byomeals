
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
import MuiAppBar from '@mui/material/AppBar';
import "./App.css"
import Drawers from './Drawers'
import { useMediaQuery } from "@material-ui/core";


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const pages = ['Home','Fridge', 'Recommended Recipes'];
function App() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const windowSize = useMediaQuery(theme.breakpoints.down('md'))

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
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
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className="navbar" position="fixed" open={open}>
        <Container maxWidth="xl">
        <Toolbar disableGutters>
          {windowSize ? (
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
              <MenuIcon />
          </IconButton>
          ) : null
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
        {/* {windowSize ? <Drawers handleDrawerClose={handleDrawerClose} open={open}/> : null} */}
      </Box>

      <Outlet context={[fridgeData, setFridgeData, newItemForm, newItemFormState, searchState, setSearchState]}/>
      </>
      
  );
}

export default App;
