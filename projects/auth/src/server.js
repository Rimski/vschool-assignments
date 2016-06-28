var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var cors = require("cors");
var port = process.env.port || 8000;
var path = require("path");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var config = require("./config");
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
//app.use(express.static(path.join(__dirname, "..", "public")));
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
    username: {type: String, required: true},
    password: {type: String, required: true},
    date:      { type: Date,    default: function () { return new Date;} },
    timestamp: { type: Date,  default: Date.now },
    age: Number,
    noPassword: function() { var user = this.toObject(); delete user.password; return user;}
});

_User.beforeSave = function(next, data) {
//    if (_User.password.isModified)
 bcrypt.hash(data.password, 10, function(err, hash) {
            if (err) return next(err);
            data.password = hash;
            next();
        });
};
var Elephant = schema.define('Elephant', {
    name: {type: String, required: true},
    description: String,
    date:      { type: Date,    default: function () { return new Date;} },
    timestamp: { type: Date,  default: Date.now },
});

_User.hasMany(Elephant, {as: 'pets', foreignKey: "userId"});
Elephant.belongsTo(_User, {as: "Owner", foreignKey: "userId"});



schema.automigrate();
// auth routes
app.post("/login", function(req, res) {
    _User.findOne(({where: {username: req.body.username}}), function(err, user) {
        if (err) return res.status(500).send(err);
        else{
        if (!user) {res.status(418).send("User name not found")}
        else {
            bcrypt.compare(req.body.password, user.password, function (err, match) {
                if (err) console.log(err);
                if (match) {
                     var token = jwt.sign(user.toObject(), config.secret);
                    res.send({message: "pota tue", token: token, success: true, user: user.noPassword()});
                } else {
                    res.status(418).send("Wrong password");
                }
            })
        }
    }
    })
});
app.post("/signup", function(req, res) {
    _User.findOne(({where: {username: req.body.username}}), function(err, user) {
        if (err) return res.status(500).send(err);
        else{
            if (user) {
                 res.status(418).send({ success: false, message: "Username already taken"
        }); } else{
                var newUser = new _User(req.body);
                newUser.save(function (err, user) { 
                if (err) return res.status(500).send(err);
                res.send(newUser);
                });
            }
        }
    })
});

// routes 
app.post("/elephants", function(req, res) {
    var post = new Elephant(req.body);
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
app.get("/elephants", function(req, res) {
    Elephant.all(function(err, elephants) {
       if (err) return res.status(500).send(err);
       res.send(elephants);
   });
});




app.listen(port, function() {
    console.log("TURN DOWN THE WHAT? " + port)
});