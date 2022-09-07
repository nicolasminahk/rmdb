import React, { useEffect } from "react";
import AppBar from "../components/AppBar";
import { Grid } from "../components/Grid";
// import { useDispatch, useSelector } from "react";
// import axios from "axios";
// import { getUser } from "../state/user";

export const Home = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   axios.get("/auth/me").then(({ data }) => dispatch(getUser(data))); //---> Obtener Usuario
  // }, [dispatch]);

  return (
    <>
      <div>Home</div>
      <AppBar />
      <Grid />
    </>
  );
};

//Se importa con llaves al exportarse como variable
