const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    type : { type : String, require : true},
    name : { type : String, require : true},
    description : { type : String, require : true, maxLength : 1000},
    platform : { type : String, require : true},
    languages : { type : [String], require : true},
    price : {type : Number, require : true},
    classification : {type : Number, require : true},
    comments : {type : [String]},
    main_image : {type : String, require : true},
    sec_images : {type : [String], maxLength : 2},
    video_link : {type : String}


});

module.exports = mongoose.model("Item", ItemSchema);