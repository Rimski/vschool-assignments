var express = require("express")
var politicalRoute = express.Router();
var topic = require("../models/topic.js");

politicalRoute.route("/")
    .get(function (req, res) {
        topic.find(function (err, topics) {
            if (err) throw err;
            res.send(topics);
        })
    })
    .post(function (req, res) {
        var newTopic = new topic(req.body)
        newTopic.save(function (err, thing) {
            if (err) throw err;
            res.send(thing);
        })
    })
politicalRoute.route("/:id")
    .put(function (req, res) {
        topic.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, function (err, item) {
            if (err) throw err;
            item.save();
            res.send(item);
        });
    })
    .delete(function (req, res) {
        topic.findByIdAndRemove(req.params.id, function (err, item) {
            if (err) throw err;
            res.send(item);
        });
    })

module.exports = politicalRoute;