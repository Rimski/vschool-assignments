var _User = require("../models/user");
var express = require("express");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var config = require("../config");
var authRoutes = express.Router();
authRoutes.route("/login")
.post(function(req, res) {
    _User.findOne(({where: {username: req.body.username}}), function(err, user) {
        if (err) return res.status(500).send(err);
        else{
        if (!user) {res.status(418).send("User name not found")}
        else {
            bcrypt.compare(req.body.password, user.password, function (err, match) {
                if (err) res.status(518).send(err);
                if (match) {
                     var token = jwt.sign(user.toObject(), config.secret);
                    res.send({message: "pota tue", token: token, success: true, user: user.noPassword()});
                } else {
                    res.status(418).send("Wrong password");
                }
            })
        }
    }
    })
});
authRoutes.route("/signup")
.post(function(req, res) {
    _User.findOne(({where: {username: req.body.username}}), function(err, user) {
        if (err) return res.status(502).send(err);
        else{
            if (user) {
                 res.status(418).send({ success: false, message: "Username already taken"
        }); } else{
                var newUser = new _User(req.body);
                newUser.save(function (err, user) { 
                if (err) return res.status(500).send(err.message);
                res.send(newUser.noPassword() );
                });
            }
        }
    })
});
module.exports = ("authRoutes", authRoutes);