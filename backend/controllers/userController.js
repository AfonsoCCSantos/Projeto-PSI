const User = require("../models/user");
const Item = require("../models/item")

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
            if(!user){
                res.status(404).json({succeeded: false, msg:"User doesn't exist"});
                return;
            }
            for (let item of user.wish_items) { // check if this items is already on user's wishlist
                if(item._id == req.body.item_id){
                    res.json({succeeded: false, msg:"This item is already in the Wishlist"});
                    return;
                }
            }
            Item.findById(req.body.item_id, (err, item) =>{
               if(err){
                   return next(err);
               }

               if(!item){
                   res.status(404).json({succeeded: false, msg:"This item doesn't exist"});
                   return;

               }
               else{
                   user.wish_items.push(req.body.item_id)

                   User.findByIdAndUpdate(user._id,user,{},(err,old_user) =>{
                       if (err) {
                           return next(err);
                       }
                       res.json({succeeded: true, msg:"Item added successfully to Wishlist"});

                   });
               }
            });
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