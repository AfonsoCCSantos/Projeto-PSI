const Item = require('../models/item');

exports.items_search_list = (req, res, next) => {
    Item.find({"name": { $regex: req.query.name, $options: 'i' }}).exec(function (err, list_items) {
        if (err) return next(err);
        res.send(list_items);
    });
};

exports.items_list = (req, res, next) => {
    Item.find().exec(function (err, list_items) {
        if (err) return next(err);
        res.send(list_items);
    });
};

exports.add_item = (req, res, next) => {

    const item = new Item({
        type: req.body.type,
        name: req.body.name,
        description: req.body.description,
        platform: req.body.platform,
        languages: req.body.languages,
        price: req.body.price,
        classification: req.body.classification,
        comments: req.body.comments,
        main_image: req.body.main_image,
        sec_images: req.body.sec_images,
        video_link: req.body.video_link
    });

    item.save((err) => {    
        if (err)
            return err(next);
    });

    res.send();
};