const User = require("../models/user");

exports.getUser = (req, res) => {
    const user = User.findOne({ userName: req.params.userName });
    if(user == null){
        res.json("User Doesnt exists");
    } else {
            res.json(user);
    }
}

exports.getUserByUserName = (req, res,next) => {
    User.find({name:req.params.name})
        .exec((err,user) =>{
            if(err){
                next(err);
            }
            if(user == null || user.length == 0){
                // No results.
                const err = new Error("Hero not found");
                err.status = 404;
                return next(err);
            }
            res.json(user);
        })
  };