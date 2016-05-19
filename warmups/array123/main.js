//array123 = [1, 1, 2, 3, 1]   //→ true
array123 = [1, 1, 2, 4, 1]  //→ false
//array123 = [1, 1, 2, 1, 2, 3] // true

function check123(array) {
    var string = array.join("");
    if (string.indexOf("123") !== -1) {
        return true;
    } else {return ("nope")}
}
console.log(check123(array123))