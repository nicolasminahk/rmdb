import React, { useEffect } from "react";

import { Grilla } from "../components/Grid";

import { useDispatch } from "react-redux";
import axios from "axios";
import { getUser } from "../state/user";
import Navbar from "../components/Navbar";

export const Home = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   axios.get("/auth/me").then(({ data }) => dispatch(getUser(data))); //---> Obtener Usuario
  // }, [dispatch]);

  return (
    <>
      <Navbar />
      <Grilla />
    </>
  );
};

//Se importa con llaves al exportarse como variable
