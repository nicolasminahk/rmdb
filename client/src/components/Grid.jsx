import React from "react";
import Cards from "../common/Cards";
import { useState, useEffect } from "react";
import axios from "axios";

import { Grid } from "@mui/material";

//a card ke deberia pasar por prop cada pelicual?

export const Grilla = () => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios.get("/media/popular").then(({ data }) => setmovies(data.data));
  }, []);

  console.log(movies);
  //Enviar una por una
  //Ordenar cards

  return (
    <Grid
      container
      spacing={{ xs: 2 }}
      columnSpacing={4}
      sx={{ gridTemplateAreas: "header", backgroundColor: "whitesmoke" }}
    >
      {movies.map((movies, id) => (
        <Grid item md={4}>
          <Cards movies={movies} key={id} />
        </Grid>
      ))}
    </Grid>
  );
};
