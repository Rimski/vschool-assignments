function camelCase(string) {
    if (string.indexOf(" ") != -1) {
        var splitArray = string.split(" ");
        console.log(firstLetter(splitArray));
    } else if (string.indexOf("-") != -1) {
        var splitArray = string.split("-");
        console.log(firstLetter(splitArray));
    } else if (string.indexOf("_") != -1) {
        var splitArray = string.split("_");
        console.log(firstLetter(splitArray));
    } else {
        console.log("thats only one word silly.")
    }

}

function firstLetter(array) {

    var newString = array[0];
    for (var i = 1; i < array.length; i++) {
        newString += array[i].charAt(0).toUpperCase().concat(array[i].slice(1));

    }
    return (newString);
}

camelCase("grease is the time its the place it's the motion \ngrease is the word it's got groove it's got meaning \nit's the way that we're feeling");