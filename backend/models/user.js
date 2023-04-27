const mongoose = require("mongoose");
const { use } = require("../routes/users");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { 
    type: String , 
    require : [true, 'Username is required!'], 
    unique : true,
    validate: {
      validator: function(username) {
        return length(username) >= 3;
      },
      message: 'Username must have at least 3 characters!',
    },
    validate: {
      validator: function(username) {
        return /^[a-zA-Z0-9]+$/.test(username);
      },
      message: 'Invalid username'
    }
  },
  password: { 
    type: String, 
    require : [true, 'Password is required!'],
    validade: {
      validator: function(password) {
        return length(password) >= 8;
      },
      message: 'Password must have at least 8 characters!',
    },
    validade: {
      validator: function(username) {
        return /[a-z]/.test(username);
      },
      message: 'Password must have at least 1 lowercase letter!',
    },
    validade: {
      validator: function(username) {
        return /[A-Z]/.test(username);
      },
      message: 'Password must have at least 1 uppercase letter!',
    },
    validade: {
      validator: function(username) {
        return /[0-9]/.test(username);
      },
      message: 'Password must have at least 1 number!',
    }
  },
  image: { type: String},
  item_library: { type: [Schema.Types.ObjectId, ref = "Item" ]},
  wish_items: { type: [Schema.Types.ObjectId, ref = "Item" ]},
  followers_list: { type: [Schema.Types.ObjectId, ref = "User" ]},
  following_list: { type: [Schema.Types.ObjectId, ref = "User" ]}
});

module.exports = mongoose.model("User", UserSchema);
