var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var port = process.env.port || 8000;
var fishRoute = require("./routes/fishRoute.js");

app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/");

app.use("/fish", fishRoute);


app.listen(port, function () {
    console.log("BURNINATING THE COUNTRYSIDE");
})