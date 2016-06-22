var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var bountyRoutes = require("./routes/bountyRoutes");
var mongoose = require("mongoose");
var port = process.env.port || 8000;
mongoose.connect("mongodb://localhost/bounties");
app.use(bodyParser.json());
app.use(cors());
app.use("/bounty", bountyRoutes);

app.listen(port, function () {
    console.log("BURNINATING THE CONTRYSIDE");
});