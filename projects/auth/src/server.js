var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");
var port = process.env.port || 8000;
var path = require("path");

app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/");
mongoose.connection.on("connected", function() {
    console.log("COUNTRYSIDE");
});

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));


app.listen(port, function() {
    console.log("BURNINATING THE ")
});