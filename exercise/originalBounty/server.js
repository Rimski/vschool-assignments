var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var bountyRoutes = require("./routes/bountyRoutes");
app.use(bodyParser.json());
app.use(cors());
app.use("/bounty", bountyRoutes);

app.listen(8000, function () {
    console.log("servers working");
});