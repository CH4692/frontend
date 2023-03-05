import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";

function MainListItems() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate("/admin")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/orders")}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/signin")}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </React.Fragment>
  );
}

export default MainListItems;

export const secondaryListItems = <React.Fragment></React.Fragment>;
