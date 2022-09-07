const express = require("express");
const routerUser = express.Router();
const userController = require("../controllers/user.controller");
const { validateAuth } = require("../middlewares/authToken");

const app = express();

//Mostrar / crear usuarios
routerUser.get("/", userController.getUsers);
routerUser.post("/", userController.createUser);

//Editar / Borrar usuarios
routerUser.put("/:id", validateAuth, userController.putUser);
routerUser.delete("/:id", validateAuth, userController.deleteUser);

//Favs

routerUser.post("/:id/favs", userController.postFavs);
routerUser.delete("/:id/favs", userController.deleteFavs);
//ruta put edite los favoritos

module.exports = routerUser;
