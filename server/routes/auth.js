const express = require("express");

const routeAuth = express.Router();
const authController = require("../controllers/auth.controller");
const { validateAuth } = require("../middlewares/authToken");

routeAuth.post("/", authController.login);
// routeAuth.get("/", authController.getUser);
routeAuth.get("/me", validateAuth, (req, res) => {
  console.log(req.cookies);
  res.send(req.user);
});

//ruta singUp ---> registrarse y logearse.

module.exports = routeAuth;
