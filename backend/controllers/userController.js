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
            res.json(user);
        })
};

exports.registerUser = (req, res, next) => {
  User.findOne({ name: req.params.name})
    .then((user) => {
      if (user) {
        res.status(302);
      }
      else {
        const user = new User({
          name: req.body.name,
          password: req.body.password,
        });
        user.save((err) => {    
          if (err)
              return err(next);
        });
        res.status(200)
      }
    });
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