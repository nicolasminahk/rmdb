const MediaServices = require("../services/media.services");

class MediaController {
  static async getAllMovies(req, res, next) {
    const { data, error } = await MediaServices.getAllMovies();
    console.log(data);
    if (!error) return res.status(200).send({ data, error });
    return res.status(500).send(data);
  }
  static async getTopMovies(req, res, next) {
    const { data, error } = await MediaServices.getTopMovies();
    console.log(data);
    if (!error) return res.status(200).send({ data, error });
    return res.status(200).send(data);
  }
}

module.exports = MediaController;
