const express = require("express");
const router = express.Router;

const item_controller = require("../controllers/itemController");

/*GET items by term in search bar*/
router.get('/items/?name=:term', item_controller.items_search_list());

module.exports = router;