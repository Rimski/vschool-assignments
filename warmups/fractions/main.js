function toFraction (num) {
    var string = num.toString();
    var myArray = string.split('.');
    var numberArray = [];
    for (var i = 0; i < 2; i++) {
        numberArray.push(parseInt(myArray[i]));
    }
    return numberArray[0];
}

console.log(toFraction(2332.32));