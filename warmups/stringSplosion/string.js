function stringSplosion(string) {
    var str = "";
    
    string.forEach(function(letter, index) {
        str += string.slice(0, index + 1);
    });
    
    return str;
}

console.log(stringSplosion("Code"));