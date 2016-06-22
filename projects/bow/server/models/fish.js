var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var fish = new Schema({
    length: Number,
    weight: Number,
    title: {
        type: String,
        required: true
    },
    type: String,
    comments: [String],
    popularity: {
        type: Number,
        default: 0,
        required: true
    },
    imgUrl: String,
    date: {
        type: Date,
        default: Date.now}
});

module.exports = mongoose.model("fish", fish);