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
      <AppBar
        sx={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        }}
        position="static"
      >
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
            Client Page
          </Typography>
          <Button>
            <Link style={{textDecoration: "none", color: "black"}} to={"/"}>Home</Link>
          </Button>
          <Button>
            <Link style={{textDecoration: "none", color: "black"}} to={"/client-products"}>Products</Link>
          </Button>
          <Button>
            <Link style={{textDecoration: "none", color: "black"}} to={"/contact-us"}>Contact Us</Link>
          </Button>
          <Button>
            <Link style={{textDecoration: "none", color: "black"}} to={"/register"}>Register</Link>
          </Button>
          <Button>
            <Link style={{textDecoration: "none", color: "black"}} to={"/client-user"}>User</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ClientHeader;
