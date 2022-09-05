const jwt = require("jsonwebtoken");

let validarToken = (req, res, next) => {
  let token = req.cookie;
  console.log(token);

  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      res.status(401).send(err);
    } else {
      req.usuario = decoded.usuario;
      next();
    }
  });
};

module.exports = validarToken;
