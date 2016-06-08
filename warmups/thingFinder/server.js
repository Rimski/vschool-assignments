var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var cors = require("cors");

var addId = require("./addId");
app.use(bodyParser.json());
app.use(cors());

var cars = [
    {
        model: "M3",
        make: "BMW",
        id: "1"
    },
    {
        model: "4C",
        make: "Alpha Romeio",
        id: "2"
    },
    {
        model: "8C",
        make: "Alpha Romeio",
        id: "3"
    },
    {
        model: "S",
        make: "Tesla",
        id: "4"
    },
    {
        model: "GT-6",
        make: "Triumph",
        id: "5"
    },
    {
        model: "B-GT V8",
        make: "MG",
        id: "6"
    }
];
var id = 7;

app.use("/cars", addId);
app.get("/cars", function (req, res) { 
    if (req.query.make) {
        var makeArray = cars.filter(function (car) {
            return (car.make === req.query.make);
        });
        res.send(makeArray);
    } else {
        res.send(cars)
    }

});

app.post("/cars", function (req, res) {
    cars.push(req.body);
    res.send(req.body);
});
app.put("/cars/:carId", function (req, res) {
    for (var i = 0; i < cars.length; i++) {
        if (cars[i] === +req.param.carId) {
            cars[i] = req.body;
            return res.send(req.body);
        }
    }
    res.send("No car with that id Found");
});
app.delete("/cars/:carId", function (req, res) {
    for (var i = 0; i < cars.length; i++) {
        if (cars[i] === +req.param.carId) {
            cars.splice(i, 1);
            return res.send("BURNINATED");
        }
    }
    res.send("No car with that id Found");
});
app.listen(8000, function () {
    console.log("Server Running");
});