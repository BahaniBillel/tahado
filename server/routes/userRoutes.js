// routes/productRoutes.js

const express = require("express");
const userController = require("../controllers/usersController");
const router = express.Router();

router.get("/", userController.getUsers);
router.post("/createUser", userController.createUser);

module.exports = router;
