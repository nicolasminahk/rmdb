import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Pelicula } from "./Pelicula";

export const FilmProfile = () => {
  const { id } = useParams();

  return (
    <>
      <Pelicula id={id} />
      <Outlet />
    </>
  );
};
