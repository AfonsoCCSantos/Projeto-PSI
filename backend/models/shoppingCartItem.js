const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShoppingCartItemSchema = new Schema({
    item : { type: Schema.Types.ObjectId, ref : "Item" },
    quantity: {type: Number}
});

module.exports = mongoose.model("ShoppingCartItem", ShoppingCartItemSchema);