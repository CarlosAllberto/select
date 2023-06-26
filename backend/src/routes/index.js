const express = require("express")
const router = express.Router()
const verifyJWT = require("../utils/verifyJWT")
const imageMiddleware = require("../middlewares/imageMiddleware")

const userControllers = require("../controllers/userController")

router.post("/user/login", userControllers.loginAction)
router.post("/user/register", userControllers.registerAction)
router.put("/user/:id", verifyJWT, imageMiddleware.upload, imageMiddleware.resize, userControllers.editAction)
router.delete("/user/:id", verifyJWT, userControllers.deleteAction)
//  /avatar/:id

module.exports = router
