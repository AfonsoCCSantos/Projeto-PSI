const express = require("express");
const router = express.Router();

const item_controller = require("../controllers/itemController");

/*GET items by term in search bar*/
router.get('/', item_controller.items_list);

router.get('/search', item_controller.items_search_list);

router.post('/', item_controller.add_item);

router.get('/:id', item_controller.get_item);

module.exports = router;