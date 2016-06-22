var express = require("express");
var bountyRoutes = express.Router();
var bounties = require("../models/bounty");

bountyRoutes.route("/")
    .get(function (req, res) {
        bounties.find(function (err, list) {
            if (err) throw err;
            res.send(list);
        })
    })
    .post(function (req, res) {
        var newBounty = new bounties(req.body);
        newBounty.save(function (err, item) {
            res.send(item)
        });
    })
bountyRoutes.route("/:id")
    .get(function (req, res) {
        findById(route.params.id, function (err, item) {
            if (err) throw err;
            res.send(item);
        })
    })
    .put(function (req, res) {
        bounties.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, function (err, item) {
            if (err) throw err;
            item.save();
            res.send(item);
        });
    })
    .delete(function (req, res) {
        bounties.findByIdAndRemove(req.params.id, function (err) {
            res.send("BURNINATED");
        });

    })

module.exports = bountyRoutes;