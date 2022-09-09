import React, { useEffect } from "react";
import AppBar from "../components/AppBar";
import { Grilla } from "../components/Grid";

import { useDispatch } from "react-redux";
import axios from "axios";
import { getUser } from "../state/user";

export const Home = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   axios.get("/auth/me").then(({ data }) => dispatch(getUser(data))); //---> Obtener Usuario
  // }, [dispatch]);

  return (
    <>
      <AppBar />
      <Grilla />
    </>
  );
};

//Se importa con llaves al exportarse como variable
