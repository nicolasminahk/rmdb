import React, { useEffect } from "react";
import AppBar from "../components/AppBar";
import { Grilla } from "../components/Grid";
import Loggin from "../components/Loggin";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getUser } from "../state/user";

export const Home = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios.get("/auth/me").then(({ data }) => dispatch(getUser(data))); //---> Obtener Usuario
  // }, [dispatch]);

  return (
    <>
      <div>Home</div>
      <AppBar />
      {/* <Loggin /> */}
      <Grilla />
    </>
  );
};

//Se importa con llaves al exportarse como variable
