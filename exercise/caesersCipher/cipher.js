var ask = require('readline-sync');
var input = ask.question('What phrase would you like to encrypt? ').toUpperCase();

var shift = parseInt(ask.question('How many letters would you like to shift? '));

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function shiftLetter(phrase, shift) {

var newString = "";
for (i = 0; i < inputArray; i++) {
var letter = phrase[i];
var index = alphabet.indexOf(letter);
    if (index === -1){
        letterCode += letter;
        continue
    }
     var letterCode = (index + shift) % 26;
    newString += alphabet(letterCode);
}
return newString;
}
console.log(shiftLetter(phrase, shift))