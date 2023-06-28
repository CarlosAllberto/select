const express = require("express")
const router = express.Router()
const verifyJWT = require("../utils/verifyJWT")

const userControllers = require("../controllers/userController")

router.post("/user/login", userControllers.loginAction)
router.post("/user/register", userControllers.registerAction)
router.put("/user/:id", verifyJWT, userControllers.editAction)
router.delete("/user/:id", verifyJWT, userControllers.deleteAction)
router.get("/user/token", userControllers.verifyJWT)


module.exports = router
