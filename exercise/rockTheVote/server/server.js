var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var politicalRoute = express.Router();
var politics = [
    {
        name: "President?",
        description: "Who do you think should be the president",
        comments: [],
        id: 0,
        popular: 0
    },
    {
        name: "Stem Cells",
        description: "What do you think should about Stem Cells?",
        comments: [],
        id: 1,
        popular: 0
    }
];
var id = 2;
app.use(bodyParser.json());
app.use(cors());
app.use("/", politicalRoute);
politicalRoute.route("/")

.get(function (req, res) {
        res.send(politics);
    })
    .post(function (req, res) {
        req.body.id = id;
        req.body.popular = 0;
        req.body.comments = [];
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