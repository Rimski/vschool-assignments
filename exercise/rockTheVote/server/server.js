var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var politicalRoute = express.Router();
var politics = [];
var id = 0;
app.use(bodyParser.json());
app.use(cors());
app.use("/", politicalRoute);
politicalRoute.route("/")

.get(function (req, res) {
        res.send(politics);
    })
    .post(function (req, res) {
        req.body.id = id;
        id++;
        politics.push(req.body);
        res.send(req.body);
    })
politicalRoute.route("/:thingId")
    .put(function (req, res) {
        for (var i = 0; i < politics.length; i++) {
            if (politics[i].id === +req.params.thingId) {
                politics[i] = req.body;
                return res.send(req.body);
            }
        }
        res.send("I no find id.")
    })
    .delete(function (req, res) {
        for (var i = 0; i < politics.length; i++) {
            if (politics[i].id === +req.params.thingId) {
                politics.splice(i, 1);
                return res.send("BURNINATED!");
            }
        }
        res.send("I no find id")
    })

app.listen(8000, function () {
    console.log("BALETED");
});