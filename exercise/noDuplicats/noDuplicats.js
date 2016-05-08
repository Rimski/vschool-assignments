//var imput = string.split("")
//function find_unique_characters( imput ){
//    var unique = [];
//    var repeating = [];
//    for (var i = 0; i < imput.length; i++){
//        if (unique.indexOf(imput[i]) > -1){
//            unique.push (imput[i]);
//        } else repeating.push (string[i]);
//    }
//    return unique;
//}
//console.log(find_unique_characters("bookkeeper larry"));
var input = ("bookkeeper larry")

var noDupes = [];
var extras = [];

for (var i = 0; i < input.length; i++) {
    // if current item already in noDupes
    if (noDupes.indexOf(input[i]) > -1) {
        // add to extras
        extras.push(input[i]);
    } else {
        // add to noDupes
        noDupes.push(input[i]);
    }
}
console.log(noDupes.join(" "));
console.log(extras.join(" "));