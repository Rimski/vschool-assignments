var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

var bounty = [{
    firstName: "Jaba",
    lastName: "The Hut",
    liveing: true,
    price: "800000",
    type: "fatty",
    id: "1"
}];



app.get("/bounty", function (req, res) {
    res.send(bounty);
});

app.post("/bounty/", function (req, res) {
    req.body.id = uuid.v4();
    req.body.liveing = true;
    bounty.push(req.body);
    res.send(req.body);
});

app.delete("/bounty/:bountyId", function (req, res) {
    for (var i = 0; i < bounty.length; i++) {
        if (bounty[i].id === req.params.bountyId) {
            bounty.splice(i, 1)
            res.send("BURNINATED!");
        }
    }
    res.send("No bounty with that Id;");
});

app.put("/bounty/:bountyId", function (req, res) {
    for (var i = 0; i < bounty.length; i++) {
        if (bounty[i].id === req.params.bountyId) {
            bounty[i] = req.body;
            res.send(bounty[i]);
        }
    }
    res.send("No bounty with that Id.")
});

app.listen(8000, function () {
    console.log("servers working");
});