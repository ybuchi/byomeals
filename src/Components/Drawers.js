import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import Drawer from "@mui/material/Drawer";
import Divider from '@mui/material/Divider';
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Outlet, Link as RouterLink } from "react-router-dom";



const drawerWidth = 240;
const pages = ['Home','Fridge', 'Recommended Recipes'];
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

const Drawers = ({open, handleDrawerClose}) => {
  const theme = useTheme();
    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button component={RouterLink} to="/">
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button component={RouterLink} to="fridge">
            <ListItemText>Fridge</ListItemText>
          </ListItem>
          <ListItem button component={RouterLink} to="/recipes">
            <ListItemText>Recommended Recipes</ListItemText>
          </ListItem>
        </List>
        <Outlet />
      </Drawer>
    )
    
}
export default Drawers