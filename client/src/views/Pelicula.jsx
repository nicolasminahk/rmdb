// import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Cards from "../common/Cards";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { Grid } from "@mui/material";

export const Pelicula = () => {
  // const user = useSelector((state) => state.user);
  const [movies, setMovies] = useState();
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`/media/${id}`)
      .then(({ data }) => console.log(data.data.results));
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
        <>
          {movies.map((movies, id) => (
            <Grid item md={4}>
              <Cards movies={movies} key={id} />
            </Grid>
          ))}
        </>
      </Container>
    </>
  );
};
