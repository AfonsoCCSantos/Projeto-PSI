const express = require("express");
const router = express.Router();

const users_controller = require("../controllers/userController");

//alterar para a melhor função possivel
router.get("/profile/:userName", users_controller.getUserByUserName);