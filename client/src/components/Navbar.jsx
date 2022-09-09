import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Home } from "../views/Home";

//-------LINK TO LOGGIN---------
// const user = useSelector((state) => state.user);

export default function Navbar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "black" }}>
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
            Kinetoscopio
          </Typography>
          {!user.email && (
            <Button color="inherit">
              {/* <Navigate to="/loggin" replace state={{ from: "Loggin" }} /> */}
              Login
            </Button>
          )}

          <Typography variant="h6">{user.email}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
