var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var politicalRoute = require("./routes/policticalRoute.js");
var port = process.env.port || 5000;
var topic = require("./models/topic.js");

mongoose.connect("mongodb://localhost/politics");
app.use(bodyParser.json());
app.use(cors());
app.use("/", politicalRoute);

app.listen(port, function () {
    console.log("BURNINATEING THE COUNTRYSIDE");
});