const User = require("../models/user");
const UserModel = require("../models/user");

exports.getUser = (req, res) => {
    const user = User.findOne({ userName: req.params.userName });
    if(user == null){
        res.json("User Doesnt exists");
    } else {
        res.json(user);
    }
}

exports.getUserByUserName = (req, res,next) => {
    User.findOne({name:req.params.name})
        .exec((err,user) =>{
            if(err){
                next(err);
            }
            if(user == null){
                res.status(404);
            }
            res.json(user);
        })
};

exports.registerUser = (req, res, next) => {
  User.findOne({ name: req.body.name})
    .exec((err, user) => {
      if (user) {
        res.status(304).json({ message: "User already exists" });
      }
      else {
        const user = new User({
          name: req.body.name,
          password: req.body.password,
          image: req.body.image,
        });
        user.save((err) => {    
          if (err) {
            return next(err);
          }
        });
        res.status(200).json({ message: "User registered successfully" });
      }
    });
}
exports.add_item_to_wishlist = (req, res, next) => {
    User.findOne({name:req.params.user_name})
        .exec((err,user) => {
            if(err){
                next(err);
            }
            if(user == null){
                res.status(404);
                return;
            }
            for (let item of user.wish_items) { // check if this items is already on user's wishlist
                if(item._id === req.params.item_id){
                    res.json({answer:"This item is already on your Wishlist"})
                    return;
                }
            }



        })

}




exports.init_test = (req, res, next) => {
    let u1 = new User({name:"alex", password:"Alexandre1"})
    u1.save(err => {
        if(err){
            next(err);
        }
    });
    res.send("Done")

}