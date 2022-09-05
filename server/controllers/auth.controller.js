const authServices = require("../services/auth.services");

class authController {
  static async login(req, res, next) {
    const { email, password } = req.body;
    console.log(req.body);
    const { data, error, status } = await authServices.login(email, password);
    if (!error)
      return res.status(200).send({
        data: data, //--------> user.data?
        error: false,
      });
    req.user = data.user;
    res.cookie("token", data.token);
    res.status(200).send(data);
  }
}

module.exports = authController;
