
import { Outlet, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./App.css"


function App() {
  
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
          <Typography id="nav-logo" variant="h6" component="div">BYOMeal</Typography>
          <Typography variant="h6" component="div">
              <Link className="nav-link" to="/fridge" Fridge>Fridge</Link>
          </Typography>
          <Typography variant="h6" component="div" >
              <Link className="nav-link" to="/recipes">Recommended Recipes</Link>
          </Typography>
          {/* <FilterFridge fridgeStock={fridgeStock} setSelectOption={setSelectOption}/> */}
          </Toolbar>
        </AppBar>
        <Outlet />
      
      {/* <Recommended />
      Routes will go here in the future
      <Fridge /> */}
    </div>
  );
}

export default App;
