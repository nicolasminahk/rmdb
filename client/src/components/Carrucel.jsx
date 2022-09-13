import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cards from "../common/Cards";

export const Carrucel = () => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios.get("/media/top").then(({ data }) => setmovies(data.data.results));
    console.log(movies);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Box sx={{ minHeight: "0px", minWidth: "0px" }}>
      <div>
        <h2>Pause On Hover</h2>
        {movies.length && (
          <>
            <Slider {...settings}>
              {movies.map((movies, id) => (
                <Cards movies={movies} key={id} />
              ))}
            </Slider>
          </>
        )}
      </div>
    </Box>
  );
};
