const MediaServices = require("../services/media.services");

class MediaController {
  static async getAllMovies(req, res, next) {
    const { data, error } = await MediaServices.getAllMovies();

    if (!error) return res.status(200).send({ data, error });
    return res.status(500).send(data);
  }
  static async getTopMovies(req, res, next) {
    const { data, error } = await MediaServices.getTopMovies();

    if (!error) return res.status(200).send({ data, error });
    return res.status(200).send(data);
  }
  static async getOneMovie(req, res, next) {
    const id = req.params.id;
    const { data, error } = await MediaServices.getOneMovie(id);
    console.log("back data", data);
    if (!error) return res.status(200).send({ data, error });
    return res.status(400).send(data);
  }
}

module.exports = MediaController;
