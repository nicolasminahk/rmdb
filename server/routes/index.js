const router = require("express").Router();

const routerAuth = require("./auth");
const routerMedia = require("./media");
const routerUser = require("./user");

router.use("/users", routerUser);
router.use("/loggin", routerAuth);
router.use("/media", routerMedia);

module.exports = router;
