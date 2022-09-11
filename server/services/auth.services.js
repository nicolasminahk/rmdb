const Usuario = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class authServices {
  static async login(email, password) {
    try {
      const user = await Usuario.findOne({ email: email });
      if (!user) return { data: "Usuario no encontrado", error: true };
      console.log(user.password);
      const passValido = bcrypt.compareSync(password, user.password);
      if (!passValido) return { data: "contraseña incorrecta", error: true };
      const jwToken = jwt.sign(
        {
          _id: user.id,
          nombre: user.nombre,
          email: user.email,
        },
        "secret",
        { expiresIn: "7d" }
      );

      return {
        data: { user, token: jwToken },
        error: false,
      };
    } catch (err) {
      return { data: err, error: true };
    }
  }
}

module.exports = authServices;
