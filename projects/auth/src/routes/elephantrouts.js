var Elephant = require("../models/elephant");
var express = require("express");
var elephantRoutes = express.Router();
elephantRoutes.route("/elephant")
.post(function(req, res) {
    var post = new Elephant(req.body);
    post.save(function(err, item) {
        if (err) return res.status(500).send("there was a problem: " + err);
         res.send(item);
    })
});
elephantRoutes.route("/elephant/list")
.post(function(req, res) {
    Elephant.all({where: {userId: req.body.id}},function(err, elephants) {
       if (err) return res.status(500).send(err);
       res.send(elephants);
   });
})

module.exports = ("elephantroutes", elephantRoutes);