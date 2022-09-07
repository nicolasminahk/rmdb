const { validateToken } = require("../config/token");

function validateAuth(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);

  const { payload } = validateToken(token);

  if (!payload) return res.sendStatus(401);

  req.user = payload;
  next();
}

module.exports = { validateAuth };

// const jwt = require("jsonwebtoken");

// let validarToken = (req, res, next) => {
//   let token = req.cookie;
//   console.log(token);

//   jwt.verify(token, "secret", (err, decoded) => {
//     if (err) {
//       res.status(401).send(err);
//     } else {
//       req.usuario = decoded.usuario;
//       next();
//     }
//   });
// };

// module.exports = validarToken;
