var add = require("./modules/add");

add(2, 2);

var sub = require("./modules/sub");

sub.subtract(4, 2);

var mult = require("./modules/mult");

mult.mult(2, 2);

var Divider = require("./modules/div");
var div = new Divider();

div.divide(4, 2);

var exp = require("./modules/exp");

exp.exponent(2, 4);