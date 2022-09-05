const express = require("express");
const routerUser = express.Router();
const userController = require("../controllers/user.controller");
const validarToken = require("../middlewares/authToken");

const app = express();

//Mostrar / crear usuarios
routerUser.get("/", userController.getUsers);
routerUser.post("/", userController.createUser);

//Editar / Borrar usuarios
routerUser.put("/:id", validarToken, userController.putUser);
routerUser.delete("/:id", validarToken, userController.deleteUser);

//Favs

routerUser.post("/favs", userController.postFavs);
routerUser.delete("/:id/favs", userController.deleteFavs);
//ruta put edite los favoritos

module.exports = routerUser;
