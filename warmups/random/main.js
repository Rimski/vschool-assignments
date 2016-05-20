var charList = ".,?;!%^cdefghijklmz1238HIJKLMNOPQWXYZ"
var charList2 = "nopqrstuvRSTUVwxy90A@#$BCD4&ab567EFG"
function random(x) {
    var y = (x / 2);
    var charstring = ""
    for (var i = 0; i < y; i++) {
        var maths = ((Math.floor(Math.random() * charList.length) + 0));
        charstring += (charList[maths]);
        var maths = ((Math.floor(Math.random() * charList2.length) + 0));
        charstring += (charList2[maths]);
    }
    return charstring;
}
console.log(random(8));