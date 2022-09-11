import React, { useEffect } from "react";

import { Grilla } from "../components/Grid";

import { useDispatch } from "react-redux";
import axios from "axios";
import { getUser } from "../state/user";
import Navbar from "../components/Navbar";
import { Carrucel } from "../components/Carrucel";
import { Busqueda } from "../components/Busqueda";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Carrucel />
      <Busqueda />
      <Grilla />
    </>
  );
};

//Se importa con llaves al exportarse como variable
