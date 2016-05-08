var readline = require("readline-sync");

function person(name, age, favoriteColor, ect) {
    this.name = name;
    this.age = age;
    this.favoriteColor = favoriteColor;
    this.ect = ect;

}
var cheshireSays2 = (" Years old, in case you Wondered");
var cheshireSays1 = ("151");
console.log("Why helloowWW, i'm the Cheshire Cat");
var name = readline.question("whats your name?");
console.log(
    name.toLocaleUpperCase());
var age = readline.question("how old are you?")
console.log("Thats only" + age.length + "charachters long");
console.log("i'm at least 3.5 characters long")
console.log(cheshireSays1.concat(cheshireSays2));
var ect = readline.question("tell me... about yourself")
