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