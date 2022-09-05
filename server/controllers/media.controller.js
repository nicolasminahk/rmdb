const MediaServices = require("../services/media.services");

class MediaController {
  static async getAllMovies(req, res, next) {
    const { data, error } = await MediaServices.getAllMovies();

    if (!error) return res.status(200).send({ data, error });
    return res.status(data.statusCode).send(data);
  }
}

module.exports = MediaController;
