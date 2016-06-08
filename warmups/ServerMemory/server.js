var express = require("express");
var app = express();

var bodyParser = require("body-parser");

var cors = require("cors");
var id = 0;
app.use(bodyParser.json());
app.use(cors());
var store = [];
// set up get ect.
app.get("/", function (req, res) {
    res.send(store);
});
app.post("/", function (req, res) {
    req.body.id = id;
    store.push(req.body);
    res.send(req.body);
    id++;
});
app.delete("/:bodyId", function(req, res) {
   for (var i = 0; i < store.length; i++){
       if (store[i].id === +req.params.bodyId) {
           store.splice(i, 1);
           return res.send("BURNINATED!");
       }
   } 
    res.send("no id found");
});
app.put("/:bodyId", function(req, res) {
     for (var i = 0; i < store.length; i++){
       if (store[i].id === +req.params.bodyId) {
           store[i] = req.body;
           return res.send(req.body);
       }
   }
    res.send("nothing with that id");
});



// add listener for port 8000
app.listen(8000, function () {
    console.log("working");
});