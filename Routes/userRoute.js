const express = require("express");
const userController = require("../Controllers/userController");

const router = express.Router();

router.route("/sectors").post(userController.createSectors);
router.route("/users").post(userController.createUser)
router.route("/users/:id").post(userController.updateUser)
router.route("/users").get(userController.getUsers)
// router.route("/:id").put(userController.updateUser);
router.route("/sectors").get(userController.getSectors);
module.exports = router;
