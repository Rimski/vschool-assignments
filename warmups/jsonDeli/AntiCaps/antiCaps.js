function isCaps(letter) {
    return letter === letter.toUpperCase();
}
var thisString = "";

function antiCaps(string) {
    for (var i = 0; i < string.length; i++) {
        if (isCaps(string[i]) === true) {
            thisString += string[i].toLowerCase();
        } {
            thisString += string[i].toUpperCase();
        }
    }
}

antiCaps("raceCar");

console.log(thisString)