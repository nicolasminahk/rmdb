import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import user from "../../../server/models/user";
import { addFav } from "../state/user";
import Cards from "../common/Cards";
import { useSelector } from "react-redux";

export const Usuario = () => {
  const user = useSelector((state) => state.user);

  const { id } = useParams();

  console.log(user);
  console.log(Usuario.favorites);
  useEffect(() => {
    axios.post(`/users/${id}/favs`).then(({ data }) => console.log(data.data));
  }, []);

  return (
    <>
      <Box>
        <Typography variant="h2">{user.nombre}</Typography>
      </Box>
    </>
  );
};
