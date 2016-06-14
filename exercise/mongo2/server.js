var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require("body-parser");
var ObjectId = require("mongodb").ObjectId;
var port = process.env.port || 5000;
var db;
var url = "mongodb://localhost:27017/practice";

app.use(bodyParser.json());

app.get("/comebacks", function(req, res) {
    var collection = db.collection("comebacks");
    collection.find().toArray(function (err, items) {
        if (err) throw err;
        res.send(items);
    });
});

app.get("/comebacks/:id", function(req, res) {
    var collection = db.collection("comebacks");
    collection.findOne({_id: ObjectId(req.params.id)}, function(err, item) {
        if (err) throw err;
        res.send(item);
    });
});

app.post("/comebacks", function(req, res) {
    var collection = db.collection("comebacks");
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object){
        res.send("you must enter comeback")
    } else {
        collection.insertOne(req.body, function (err, result) {
            if (err) throw err;
            res.send(result.ops[0]);
        });
    }
});

app.delete("/comebacks/:id", function(req, res) {
    var collection = db.collection("comebacks");
    collection.deleteOne({_id: ObjectId(req.params.id)}, function(err, result) {
        if (err) throw err;
        res.send({succsessfull: true, BURNINATED: result.deletedCount})
    });
});



MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    
    db = database;
    
    app.listen(port, function() {
    console.log("BURNINATING THE CONTRYSIDE");
})
})

