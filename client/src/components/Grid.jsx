import React from "react";
import Cards from "../common/Cards";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

//a card ke deberia pasar por prop cada pelicual?

export const Grid = () => {
  const dispatch = useDispatch();

  const [movies, setmovies] = useState([]);
  useEffect(() => {
    const data = axios
      .get("/media/popular")
      .then(({ data }) => console.log(data));
    setmovies(data.results);
  }, []);

  console.log(movies);
  //Enviar una por una
  //Ordenar cards

  return (
    <div className="columns is-multiline layout">
      <div className="column is-4">
        {movies.map((movies) => (
          <Cards movies={movies.results} />
        ))}
      </div>
    </div>
  );
};
