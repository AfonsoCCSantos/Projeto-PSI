var express = require('express');
var router = express.Router();
const users_controller = require("../controllers/userController");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/init", users_controller.init_test)

module.exports = router;
