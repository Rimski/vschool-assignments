var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var cors = require("cors");
var port = process.env.port || 8000;
var path = require("path");
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
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
    timestamp: { type: Date,  default: Date.now },
    age: Number
});
var _Post = schema.define('_Post', {
    title: String,
    description: String,
    date:      { type: Date,    default: function () { return new Date;} },
    timestamp: { type: Date,  default: Date.now },
});

_User.hasMany(_Post, {as: 'posts', foreignKey: "userId"});
_Post.belongsTo(_User, {as: "author", foreignKey: "userId"});



schema.automigrate();
// routes 
app.post("/users", function(req, res) {
    var user = new _User(req.body);
    user.save(function (err, user) { 
        if (err) return res.status(500).send(err);
        var post = user.posts.build({ title: 'Hello world', description: "Description Text" });
        post.save(function(err, post) {
            if (err) return res.status(500).send(err);
            res.send(user);
        });
        
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
    _User.all(function(err, users) {
       if (err) return res.status(500).send(err);
       res.send(users);
   });
});




app.listen(port, function() {
    console.log("BURNINATING THE " + port)
});