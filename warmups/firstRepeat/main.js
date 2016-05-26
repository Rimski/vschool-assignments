//"ggggggggxkljfvlsjkfg",

function noRepeats(string) {
    var letter = string[0];
    for (var i = 0; i < string.length; i++) {
        if (string[i] != letter) {
            return(string[i]);
        }
    }
}
console.log(noRepeats("ggggggggxkljfvlsjkfg"));


//something diffrent


//function notRepeat(string) {
//    var nope = "";
//    var yep = "";
//    for (var i = 0; i < string.length; i++) {
//        if (yep.indexOf(string[i]) != )
//    }
//}