var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");

app.use(bodyParser.json());

var someData = [];

app.get("/", function (req, res) {
    someData.push();
res.status(200).send("Howdy Howdy Howdy");
});

app.post("/", function(req, res){
    someData.push(req.body);
});

app.put("/", function(req, res) {
    res.send("You want to update??")
});

app.delete("/", function(req, res) {
    
});

app.listen(8000, function () {
    console.log("App is working");
});