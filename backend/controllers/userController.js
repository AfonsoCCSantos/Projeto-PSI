const UserModel = require("../models/user");

exports.getUser = (req, res) => {
    const user = User.findOne({ userName: req.params.userName });
    if(user == null){
        res.json("User Doesnt exists");
    } else {
            res.json(user);
    }
}

exports.getUserByUserName = (req, res) => {
    UserModel.findOne({ userName: req.params.userName })
      .then((user) => {
        if (!user) {
          return res.status(404).send(
            jsend(404, {
              message: "User not found!",
            })
          );
        }
  
        res.status(200).send(
          jsend(200, {
            user,
          })
        );
      })
      .catch((err) => {
        res.status(404).send(
          jsend(404, {
            message: "User not found!",
          })
        );
      });
  };

exports.registerUser = (req, res, next) => {
  UserModel.findOne({ userName: req.params.name})
    .then((user) => {
      userExists = userExits(user.name);

      if(userExits) {
        res.status(302).send(
          jsend(302, {
            message: "User found"
          })
        );
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
  
        res.status(200).send(
          jsend(200)
        );
      }
    });
}

function userExits(username) {
  UserModel.findOne({ userName: username })
      .then((user) => {
        if (!user) {
          return true;
        }
        
        return false;
      });
};