import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Cards from "../common/Cards";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

//Raiting material

export const Pelicula = () => {
  const [movies, setMovies] = useState();
  const [video, setVideo] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios.get(`/media/${id}`).then(({ data }) => setMovies(data.data));
    axios.get(`/media/${id}/video`).then(({ data }) => setVideo(data.data));
  }, []);
  //   console.log(movies);
  //   const  key = video.results[0].key
  return (
    movies &&
    video && (
      <Box
        bgcolor="#b2dfdb"
        // color="primary.contrastText"
        sx={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movies.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
        }}
        textAlign="center"
      >
        <Box
          sx={{ backgroundColor: "#00000080", height: "100vh", width: "100vw" }}
        >
          <>
            {/* <h2>{movies.title}</h2> */}
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
                component="img"
                height="600"
                sx={{
                  objectFit: "fill",
                  height: "21rem",
                  // width: "80%",
                }}
              />
            </Card>
            <CardContent>
              <Box
                sx={{
                  position: "-webkit-sticky",
                  //   backgroundColor: "#0000001f",
                  //   boxShadow: "10px 10px 16px -1px rgba(0,0,0,0.22)",
                }}
              >
                {/* <Typography variant="body2" color="text.secondary">
                Puntuación: {movies.popularity}
              </Typography> */}

                <Typography variant="caption" color="white" fontWeight={600}>
                  {/* Lenguaje original: {movies.original_language} */}
                </Typography>
                <Typography variant="overline" color="white" fontWeight={500}>
                  {movies.overview}
                </Typography>
              </Box>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "15px",
                marginBlock: "-20px",
              }}
            >
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${video?.results[0].key}`}
              />
            </Box>
          </>
        </Box>
      </Box>
    )
  );
};
