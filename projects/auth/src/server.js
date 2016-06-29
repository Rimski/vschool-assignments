var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var cors = require("cors");
var port = process.env.port || 8000;
var path = require("path");
var authroutes = require("./routes/authroutes");
var elephantroutes = require("./routes/elephantrouts");
var expressJwt = require("express-jwt");
var config = require("./config");
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/", authroutes);
app.use("/api", expressJwt({secret: config.secret}));
app.use("/api", elephantroutes);
//app.use(express.static(path.join(__dirname, "..", "public")));

app.listen(port, function() {
    console.log("TURN DOWN THE WHAT? " + port)
});