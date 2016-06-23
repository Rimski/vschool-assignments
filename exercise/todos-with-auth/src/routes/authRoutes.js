var express = require("express");
var authRouter = express.Router();
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var config = require("../config");
var bcrypt = require("bcrypt");

authRouter.post("/login", function (req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) res.status(500).send(err);

        if (!user) {
            res.status(401).send({
                success: false,
                message: "User with that usename not found"
            });
        } else {
            bcrypt.compare(req.body.password, user.password, function (err, match) {
                if (err) res.status(500).send(err);
                else if (!match) {
                    res.status(401).send({
                        success: false,
                        message: "Incorrect password"
                    });
                } else {
                    var token = jwt.sign(user.toObject(), config.secret);
                    res.send({
                        success: true,
                        token: token,
                        message: "pata too",
                        user: user.noPassword()
                    })
                }
            })


        }
    });
});

authRouter.post("/signup", function (req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, ezistingUser) {
        if (err) res.status(500).send(err);
        if (ezistingUser) res.status(418).send({
            success: false,
            message: "Username already taken"
        });
        else {
            var newUser = new User(req.body)
            newUser.save(function (err, user) {
                if (err) res.status(500).send(err);
                else res.send({
                    success: true,
                    user: user,
                    message: "succsessfuly created new user"
                })
            })
        }
    })
});

module.exports = authRouter;