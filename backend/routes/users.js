var express = require('express');
var router = express.Router();


const users_controller = require("../controllers/userController");

/* GET users listing. */
router.get('/:name', users_controller.getUserByUserName);

router.post('/register', users_controller.registerUser);

router.post("/:user_name/wishlist", users_controller.add_item_to_wishlist);

module.exports = router;
