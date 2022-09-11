const axios = require("axios");

class MediaServices {
  static async getAllMovies() {
    try {
      //TRAER AL MENOS UNAS 50 PELICULAS
      const [pag1, pag2, pag3] = await Promise.all([
        axios.get(
          `${process.env.TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        ),
        axios.get(
          `${process.env.TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=2`
        ),
        axios.get(
          `${process.env.TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=3`
        ),
      ]);
      // console.log(pag1.data.results);
      const data = [
        ...pag1.data.results,
        ...pag2.data.results,
        ...pag3.data.results,
      ];
      // console.log(data);
      if (!data.length) return { data: "No se encontraron ", error: true };

      return {
        data: [
          ...pag1.data.results,
          ...pag2.data.results,
          ...pag3.data.results,
        ],
        error: false,
      };
    } catch (error) {
      return { data: error, error: true };
    }
  }
  static async getTopMovies() {
    try {
      const result = await axios.get(
        `${process.env.TMDB_BASE_URL}/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=2`
      );

      if (result.data) return { data: result.data, error: false };
    } catch (error) {
      return { data: error, error: true };
    }
  }
  static async getOneMovie(id) {
    try {
      const result = await axios.get(
        ` ${process.env.TMDB_BASE_URL}movie/${id}?api_key=${process.env.TMDB_KEY}&language=en-US `

        // `${process.env.TMDB_BASE_URL}find/${id}?api_key=${process.env.TMDB_KEY}&language=en-US&external_source=imdb_id`
      );
      console.log("Back", result.data);
      if (result.data) return { data: result.data, error: false };
      return { data: result.data, error: false };
    } catch (err) {
      return { data: err, error: true };
    }
  }
}

module.exports = MediaServices;
