const authServices = require("../services/auth.services");

class authController {
  static async login(req, res, next) {
    const { email, password } = req.body;
    console.log(req.body);
    const { data, error } = await authServices.login(email, password);
    if (!error) {
      req.user = data;
      res.cookie("token", data.token);
      return res.status(200).json(data);
    }
    return res.status(404).json({
      data: data,
      error: true,
    });
  }
}

module.exports = authController;
