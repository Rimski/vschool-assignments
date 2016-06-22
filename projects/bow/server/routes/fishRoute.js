var express = require("express")
var fishRoute = express.Router();
var fish = require("../models/fish.js")
fishRoute.route("/")
    .get(function (req, res) {
        fish.find(function (err, fishs) {
            if (err) {
                res.status(400).send(err);
            } else {
                res.send(fishs);
            }

        });
    })
    .post(function (req, res) {
        var newfish = new fish(req.body);
        newfish.save(function (err, fish) {
            if (err) {
                res.status(500).send(err);
            }
            res.send(fish);
        });
    })
fishRoute.route("/:id")
    .get(function (req, res) {
        fish.findById(req.params.id, function (err, fish) {
            if (err) {
                res.status(400).send(err);
            };
            res.send(fish);
        })
    })
    .put(function (req, res) {
        fish.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, function (err, fish) {
            if (err) {
                res.status(400).send(err);
            } else {
                fish.save();
                res.send(fish);
            }

        })
    })
    .delete(function (req, res) {
        fish.findByIdAndRemove(req.params.id, function (err, fish) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send("BURNINATED");
            }
        });
    })

module.exports = fishRoute;