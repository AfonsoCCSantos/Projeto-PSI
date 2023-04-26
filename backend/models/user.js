const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String , require : true, unique : true},
  password: { type: String, require : true},
  image: { type: Buffer, required: true},
  item_library: { type: [Schema.Types.ObjectId, ref = "Item" ]},
  wish_items: { type: [Schema.Types.ObjectId, ref = "Item" ]},
  followers_list: { type: [Schema.Types.ObjectId, ref = "User" ]},
  following_list: { type: [Schema.Types.ObjectId, ref = "User" ]}

});

module.exports = mongoose.model("User", UserSchema);
