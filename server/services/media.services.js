const axios = require("axios");

class MediaServices {
  static async getAllMovies() {
    try {
      //TRAER AL MENOS UNAS 50 PELICULAS

      const result = await axios.get(
        `${process.env.TMBD_BASE_URL}/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
      );
      console.log(result);

      if (result.data) return { data: result.data, error: false };

      return { data: "No se encontraron ", error: true };
    } catch (error) {
      return { data: error, error: true };
    }
  }
}

module.exports = MediaServices;
