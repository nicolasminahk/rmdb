import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { useDispatch } from "react-redux";
import { Home } from "./views/Home";
import Loggin from "./views/Loggin";
import axios from "axios";
import { useEffect } from "react";
import { getUser } from "./state/user";
import { Pelicula } from "./views/Pelicula";
import { Usuario } from "./views/Usuario";

const App = () => {
  // HACER PEDIDOS AL BACK, QUE AL CAMBIAR LOS ESTADOS DEL RENDER MUESTE NUEVA INFORMACIÓN

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/loggin/me").then(({ data }) => dispatch(getUser(data))); //---> Obtener Usuario
  }, []);

  //Router Dom
  return (
    <>
      <CssBaseline />
      <Routes>
        {/* <Route path="/404"  /> */}
        <Route path="/" element={<Home />} />
        <Route path="/loggin" element={<Loggin />} />
        <Route path="/users" element={<Usuario />} />
        {/* <Route path="/users" /> */}
        <Route path="/movie/:id" element={<Pelicula />} />
      </Routes>
    </>
  );
};

//Hedear - modal
export default App;
