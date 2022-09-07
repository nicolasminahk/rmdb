const axios = require("axios");

class MediaServices {
  static async getAllMovies() {
    try {
      //TRAER AL MENOS UNAS 50 PELICULAS
      const result = await axios.get(
        `${process.env.TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
      );

      if (result.data) return { data: result.data, error: false };

      return { data: "No se encontraron ", error: true };
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
}

module.exports = MediaServices;
