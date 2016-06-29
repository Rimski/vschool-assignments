var juggleingdb = require("jugglingdb");
var schema = require("./schema"); 
var _User = require("./user");
var Elephant = schema.define('Elephant', {
    name: {type: String, required: true},
    description: String,
    date:      { type: Date,    default: function () { return new Date;} },
    timestamp: { type: Date,  default: Date.now },
});

Elephant.belongsTo(_User, {as: "Owner", foreignKey: "userId"});

module.exports = ("Elephant", Elephant);