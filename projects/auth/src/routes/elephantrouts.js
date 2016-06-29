var Elephant = require("../models/elephant");
var express = require("express");
var elephantRoutes = express.Router();
elephantRoutes.route("/elephants")
.post(function(req, res) {
    var post = new Elephant(req.body);
    post.save(function(err, item) {
        if (err) return res.status(500).send("there was a problem: " + err);
         res.send(item);
    })
})
.get(function(req, res) {
    Elephant.all({where: {userId: user.id}},function(err, elephants) {
       if (err) return res.status(500).send(err);
       res.send(elephants);
   });
})

module.exports = ("elephantroutes", elephantRoutes);