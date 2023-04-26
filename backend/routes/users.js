var express = require('express');
var router = express.Router();


const users_controller = require("../controllers/userController");

/* GET users listing. */
router.get('/:name', users_controller.getUserByUserName);

module.exports = router;
