var juggleingdb = require("jugglingdb");
var schema = require("./schema");
var Elephant = require("./elephant");
var bcrypt = require("bcrypt");
var _User = schema.define("_User", {
    name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    date:      { type: Date,    default: function () { return new Date;} },
    timestamp: { type: Date,  default: Date.now },
    age: Number
});

_User.prototype.noPassword = function() {this.toObject(); this.password = 'LOL'; return this;}

_User.beforeSave = function(next, data) {
//    if (data.password.isModified){
        bcrypt.hash(data.password, 10, function(err, hash) {
            if (err) return next(err);
                data.password = hash;
                next();
        });
//    }
};
_User.hasMany(Elephant, {as: 'pets', foreignKey: "userId"});
module.exports = ("users", _User);

//schema.automigrate()