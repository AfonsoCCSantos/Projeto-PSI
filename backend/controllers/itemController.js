const Item = require('../models/item');

exports.items_search_list = (req, res, next) => {
    Item.find({"name": /req.params.term/}).exec(function (err, list_items) {
        if (err) return next(err);
        res.send(list_items);
    });
};