
import { Outlet, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



function App() {

  return (
    <div>
      <AppBar position="static">
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/fridge" Fridge>Fridge</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/recipes">Recommended Recipes</Link>
          </Typography>
          <SearchBar />
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
