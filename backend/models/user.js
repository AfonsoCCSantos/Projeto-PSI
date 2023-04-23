const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: { type: String , require : true, unique : true},
  image: { type: String, required: true},

});

module.exports = mongoose.model("User", UserSchema);
