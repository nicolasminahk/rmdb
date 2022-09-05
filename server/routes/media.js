const routerMedia = require("express").Router();
const mediaController = require("../controllers/media.controller");

routerMedia.get("/popular", mediaController.getAllMovies);

//routerMedia.get("/similar", mediaController.getSimilarMovies()); //----> Esto debería aparecer en Users?

module.exports = routerMedia;
