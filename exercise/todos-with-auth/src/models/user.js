var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var userSchema = new Schema({
    name: String,
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        reqired: true
    },
    admin: {
        type: Boolean,
        default: false
    }
});

userSchema.pre("save", function (next) {
    var user = this;
    if (!user.isModified("password")) {
        return next();
    } else {
        // hash password
        bcrypt.hash(user.password, 10, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        })
    }
});

userSchema.methods.noPassword = function() {
    var user = this.toObject();
    delete user.password;
    return user;
}

module.exports = mongoose.model("User", userSchema)