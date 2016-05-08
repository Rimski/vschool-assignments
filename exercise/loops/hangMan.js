var readline = require("readline-sync");

function seperate(string) {
    for (var i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
}

var word = readline.question("enter word or phrase: ");
i = word.length;

var letterArray = word.split("");
seperate("Hang man");
var anonomus = (letterArray.fill("_"))
console.log(anonomus.join(" "))
do {
    var response = readline.question("enter a lowercase letter: ");

    function character(string) {
        var place = string.indexOf(response);
        if (place === -1) {
            console.log("Try again");
        } else
            letterArray.splice(place, 1);
        console.log(letterArray.length);

    }
}
while (letterArray.length >= 1);
character(word);