const userServices = require("../services/user.services");
const schema = require("../utils/joi");

class userController {
  static async getUsers(req, res, next) {
    const result = await userServices.getUsers();
    if (result) return res.status(200).json({ data: result, error: false });
    return res.status(400).send({ data: "No se encontro", error: true });
  }

  static async createUser(req, res, next) {
    const { error: errorValidate, value } = await schema.validateAsync({
      nombre: req.body.nombre,
      email: req.body.email,
    });
    console.log(req.body);
    if (errorValidate) {
      return res
        .status(400)
        .json({
          error: errorValidate,
        })
        .end();
    }
    if (!errorValidate) {
      console.log(req.body);
      const { data, error } = await userServices.createUser(req.body);
      if (error) return res.status(400).send(data);
      return res.json({ nombre: data.nombre, email: data.email });
    }
  }

  static async putUser(req, res, next) {
    const { error, value } = await schema.validateAsync({
      nombre: req.body.nombre,
    });
    // console.log(req.body);
    if (!error) {
      const user = await userServices.putUser(req.body.email, req.body);
      if (user) return res.json({ nombre: user.nombre, email: user.email });
      return res.status(400).send("No se pudo actualizar");
    } else {
      res.status(400).json({
        error: error,
      });
    }
  }

  static async deleteUser(req, res, next) {
    const user = await userServices.deleteUser(req.body.email);
    if (user) return res.json({ nombre: user.nombre, email: user.email });
    return res.status(400).send("No se pudo borrar");
  }
  static async postFavs(req, res, next) {
    const post = await userServices.postFavs(req.body.favorites);
  }

  static async deleteFavs(req, res, next) {
    const borrar = await userServices.deleteFavs();
  }
}

module.exports = userController;
