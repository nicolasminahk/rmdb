const userServices = require("../services/user.services");

class userController {
  static async getUsers(req, res, next) {
    const result = await userServices.getUsers();
    if (result) return res.status(200).json({ data: result, error: false });
    return res.status(400).send({ data: "No se encontro", error: true });
  }

  static async createUser(req, res, next) {}

  static async putUser(req, res, next) {}

  static async deleteUser(req, res, next) {}
}

module.exports = userController;
