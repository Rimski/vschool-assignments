function StairCase(n) {
var finalLine = "";
for (var i = 0; i < n; i++) {
    var line = ""; 
    for (var j = 0; j < n; j++) {
        if (j < n - (i + 1)){
            line += " "
        } else {
            line += "#"
        }
    }
    if (i != n -1) {
        finalLine += (line + "\n")
    } else {
        finalLine += line
    }
}

console.log(finalLine)
}

StairCase(105)