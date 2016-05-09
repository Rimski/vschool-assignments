var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newAlphabet = alphabet.toUpperCase();
var finisedSet = [];


for (var i = 0; i < people.length; i++) {
    finisedSet.push(people[i] + ":");

    for (var x = 0; x < alphabet.length; x++) {
        finisedSet.push(newAlphabet[x]);
        continue;
    }
}

console.log(finisedSet);