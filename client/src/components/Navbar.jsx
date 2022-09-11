import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Home } from "../views/Home";
import { loginUser, logoutUser } from "../state/user";
import axios from "axios";

//-------LINK TO LOGGIN---------
// const user = useSelector((state) => state.user);

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user.email);

  const handleLog = (e) => {
    e.preventDefault();
    navigate("/loggin");
  };

  const handleLogout = () => {
    axios.get("/loggin/logout").then(() => dispatch(logoutUser({})));
    navigate("/");
  };
  console.log(user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "black" }}>
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
            {/* <Button onClick={navigate("/")} /> */}
          </Typography>

          {!user.email && (
            <IconButton>
              <LoginIcon color="white" onClick={handleLog}>
                <Typography>Login</Typography>
              </LoginIcon>
            </IconButton>
          )}
          {user.email && (
            <IconButton>
              <LogoutIcon color="white" onClick={handleLogout} position="fixed">
                <Typography>Logout</Typography>
              </LogoutIcon>
            </IconButton>
          )}
          <AccountCircleIcon>
            <Typography variant="x-small">{user.email}</Typography>
          </AccountCircleIcon>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
