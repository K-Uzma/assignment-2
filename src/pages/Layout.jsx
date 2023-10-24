import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet, useNavigate } from "react-router-dom";

const navItems = [
  {
    path: "/",
    name: "Home",
    isLoggedIn: null,
  },
  {
    path: "/login",
    name: "Login",
    isLoggedIn: null,
  },
  {
    path: "/register",
    name: "Register",
    isLoggedIn: null,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    isLoggedIn: true,
  },
];

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

  const handleLogout = () => {
    localStorage.removeItem("loggedIn"); // Remove logged-in status
    navigate("/login"); // Redirect to the login page
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar sx={{display:'flex',alignItems:'center',justifyContent:'end',flexDirection:'row'}}>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems
              .filter((i) => i.isLoggedIn === loggedIn)
              .map((item, index) => {
                return (
                  <Button
                    key={index}
                    onClick={() => navigate(item.path)}
                    sx={{ color: "#fff" }}
                  >
                    {item.name}
                  </Button>
                );
              })}
            {loggedIn && (
              <Button
                onClick={() => handleLogout()}
                sx={{ color: "#fff" }}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {children}
      </Box>
      <Outlet />
    </Box>
  );
};

export default Layout;
