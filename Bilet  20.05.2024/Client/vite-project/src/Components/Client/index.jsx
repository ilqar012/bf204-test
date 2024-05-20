import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const ClientHeader = () => {
  return (
    <>
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
            Product
          </Typography>
          <Button color="inherit">
            <Link style={{textDecoration: "none", color: "white"}} to={"/"}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link style={{textDecoration: "none", color: "white"}} to={"/add-product"}> Add Product</Link>
          </Button>
          <Button color="inherit">
            <Link style={{textDecoration: "none", color: "white"}} to={"/basket"}>Basket <sup>0</sup></Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ClientHeader;
