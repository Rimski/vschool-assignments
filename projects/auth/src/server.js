var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var cors = require("cors");
var port = process.env.port || 8000;
var path = require("path");
app.use(cors());
app.use(bodyParser.json());
//app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));
//postgres schema tabel stuff
var jugglingdb = require("jugglingdb");
var Schema = jugglingdb.Schema;
var schema = new Schema("postgres", {
    database: "TheBest",
    username: "TheBest",
    host: "localhost",
    port: 5432
});
var _User = schema.define("_User", {
    name: {type: String, required: true},
    date:      { type: Date,    default: function () { return new Date;} },
    timestamp: { type: Number,  default: Date.now },
    age: Number
});
var _Post = schema.define('_Post', {
    title: String,
    description: String,
    date:      { type: Date,    default: function () { return new Date;} },
    timestamp: { type: Number,  default: Date.now },
});

_User.hasMany(_Post, {as: 'posts', foreignKey: "userId"});
_Post.belongsTo(_User, {as: "author", foreignKey: "userid"});



schema.automigrate();
// routes 
app.post("/users", function(req, res) {
    var user = new _User(req.body);
    user.save(function(err) {
//        if (err) return res.status(500).send("there was a problem: " + err);
//         res.send(item);
        res.send(user);
    console.log(user);
    });
});
app.post("/posts", function(req, res) {
    var post = new _Post(req.body);
    post.save(function(err, item) {
        if (err) return res.status(500).send("there was a problem: " + err);
         res.send(item);
    })
});
app.get("/users", function(req, res) {
   
    res.send(schema.models._User);
})



app.listen(port, function() {
    console.log("BURNINATING THE " + port)
});