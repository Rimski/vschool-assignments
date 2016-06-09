var express = require("express");
var bountyRoutes = express.Router();
var bounties = require("../models/bounty");
var uuid = require("uuid");


bountyRoutes.route("/")
    .get(function (req, res) {
        res.send(bounties);
    })
    .post(function (req, res) {
        req.body.id = uuid.v4();
        req.body.liveing = true;
        bounties.push(req.body);
        res.send(req.body);
    })
bountyRoutes.route("/:id")
    .get(function (req, res) {
        for (var i = 0; i < bounties.length; i++) {
            if (bounties[i] === req.params.id) {
                return res.send(bounties[i]);
            }
        }
        res.send("No bounty with that Id.")
    })
    .put(function (req, res) {
        for (var i = 0; i < bounties.length; i++) {
            if (bounties[i] === req.params.id) {
                req.body.id = bounties[i].id;
                bounties[i] = req.body;
                return res.send(bounties[i]);
            }
        }
        res.send("No bounty with that Id.")
    })
    .delete(function (req, res) {
        for (var i = 0; i < bounties.length; i++) {
            if (bounties[i] === req.params.id) {
                bounties.splice(i, 1);
                return res.send("BURNINATED");
            }
        }
        res.send("No bounty with that Id.")
    })

module.exports = bountyRoutes;