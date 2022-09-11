const routerMedia = require("express").Router();
const mediaController = require("../controllers/media.controller");

routerMedia.get("/popular", mediaController.getAllMovies);
//Hacer pedido singular

routerMedia.get("/:id", mediaController.getOneMovie);
//routerMedia.get("/similar", mediaController.getSimilarMovies()); //----> Esto debería aparecer en Users?

routerMedia.get("/top", mediaController.getTopMovies); //Top 10

module.exports = routerMedia;
