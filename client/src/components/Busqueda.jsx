import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Cards from "../common/Cards";

export const Busqueda = () => {
  const [movies, setMovies] = useState([]);
  const [talblaUsuario, setTablaUsuario] = useState([]);
  const [busqueda, setBusqueda] = useState(" ");

  // Cuando en el pedido de la barra se ven los del Top, deja de marcarse
  // la dirferencia entre las Top de arriba, y las populares de abajo
  useEffect(() => {
    axios.get("/media/top").then(({ data }) => {
      setMovies(data.data.results);
      setTablaUsuario(data.data.results);
    });
  }, []);

  useEffect(() => {
    axios.get("/media/popular").then((res) => {
      setMovies(res.data.data);
      setTablaUsuario(res.data.data);
    });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (palabra) => {
    let result = talblaUsuario.filter((elemento) => {
      console.log("Elemento", elemento);
      if (
        elemento.title.toString().toLowerCase().includes(palabra.toLowerCase())
      )
        return elemento;
    });
    setMovies(result);
  };

  return (
    <div className="containerInput ">
      <input
        className="form-control inputBuscar"
        value={busqueda}
        placeholder="Nombre"
        onChange={handleChange}
      />
      {
        // Como hago que los resultados solo se muestren al escribir?
        <>
          <Button className="btn btn-success">
            <SearchIcon> </SearchIcon>
          </Button>
          <Grid container rowSpacing={4}>
            {movies.map((movies, id) => (
              <Grid item md={4}>
                <Cards movies={movies} key={id} />
              </Grid>
            ))}
          </Grid>
        </>
      }
    </div>
  );
};
