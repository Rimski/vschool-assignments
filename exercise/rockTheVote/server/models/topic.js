var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var newTopic = new Schema({
    name: String,
    description: String,
    popular: {
        type: Number,
        default: 0,
        required: true
    },
    comments: [String]
});



module.exports = mongoose.model("topic", newTopic);