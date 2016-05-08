var readline = require("readline-sync");

function seperate(string) {
    for (var i = 0; i < string.length; i++) {
        console.log(string[i])
    }
}
seperate("Hang man");
var response = readline.question("enter a lowercase letter: ");

function character(string) {
    for (var i = 0; i < string.length; i++)

        var place = string.indexOf(response);
    if (place === -1) {
        console.log("Try again");
    } else
        console.log(place)
    return;
}
character("abcdefghijklmnopqrstuvwxyz")