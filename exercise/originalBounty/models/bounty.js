var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var newBounty = new Schema({
    firstName: String,
    lastName: String,
    liveing: {
        type: Boolean,
        default: true,
        reqired: true
    },
    price: Number,
    type: String
});

module.exports = mongoose.model("bounty", newBounty);