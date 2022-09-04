const Usuario = require("../models/user");

class userServices {
  static async getUsers() {
    try {
      const user = await Usuario.find({ status: true });
      return { data: user, error: false };
    } catch {
      return { data: "No se encontró", error: true };
    }
  }

  static async createUser() {}

  static async putUser() {}

  static async deleteUser() {}
}

module.exports = userServices;
