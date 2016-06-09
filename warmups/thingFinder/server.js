var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var cors = require("cors");

var addId = require("./addId");
var carRouter = express.Router();
app.use(bodyParser.json());
app.use(cors());

var cars = [
    {
        model: "M3",
        make: "BMW",
        id: 1
    },
    {
        model: "4C",
        make: "Alpha Romeio",
        id: 2
    },
    {
        model: "8C",
        make: "Alpha Romeio",
        id: 3
    },
    {
        model: "S",
        make: "Tesla",
        id: 4
    },
    {
        model: "GT-6",
        make: "Triumph",
        id: 5
    },
    {
        model: "B-GT V8",
        make: "MG",
        id: 6
    }
];
carRouter.route("/")
    .get(function (req, res) {
        if (req.query.make) {
            var makeArray = cars.filter(function (car) {
                return (car.make === req.query.make);
            });
            res.send(makeArray);
        } else {
            res.send(cars)
        }

    })
    .post(function (req, res) {
        cars.push(req.body);
        res.send(req.body);
    })
carRouter.route("/:carId")
    .put(function (req, res) {
        for (var i = 0; i < cars.length; i++) {
            if (cars[i] === +req.params.carId) {
                cars[i] = req.body;
                return res.send(req.body);
            }
        }
        res.send("No car with that id Found");
    })
    .delete(function (req, res) {
        for (var i = 0; i < cars.length; i++) {
            if (cars[i].id === +req.params.carId) {
                cars.splice(i, 1);
                return res.send("BURNINATED");
            }
        }
        res.send("No car with that id Found");
    })
app.use("/cars", addId);
app.use("/cars", carRouter);

;
app.listen(8000, function () {
    console.log("Server Running");
});