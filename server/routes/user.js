const router = require("express");
const userController = require("../controllers/user.controller");

router.get("/", userController.getUsers);
router.post("/:id", userController.createUser);

router.put("/:id", userController.putUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
