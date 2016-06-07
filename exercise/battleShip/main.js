var readline = require("readline-sync");

var shipCount = 0;

function Location() {
    this.ship =
        Math.floor((Math.random() * 5) + 1);

    this.hit = false;
    this.display = function () {
        if (this.hit === true && this.ship === 5) {
            return "X";
        } else if (this.hit === true && this.ship != 5) {
            return "M";
        } else if (this.hit === false) {
            return "0";
        } else {
            return "Why";
        }
    }
}

var grid = []

function makeShips() {
    for (var i = 0; i < 10; i++) {
        var row = [];
        for (var j = 0; j < 10; j++) {
            row.push(new Location());
        };
        grid.push(row);
    };
}

function verifyX(x) {
    if (x.length < 1 || x.length > 1) {
        console.log("You Suck");
        var newX = readline.question("Enter a number between 0 & 9 for X: ");
        return newX;
    } else {
        return x;
    }
}

function verifyY(y) {

    if (y.length < 1 || y.length > 1) {
        console.log("You Suck");
        var newY = readline.question("Enter a number between 0 & 9 for Y: ");
        return newY;
    } else {
        return y;
    }
}

function fireTorpedo(x, y) {
   var myX = verifyX(x);
   var myY = verifyY(y);
    grid[myX][myY].hit = true;
    if (grid[myX][myY].ship === 5) {
        shipCount = shipCount + 1;
        console.log("You Sunk my Battle Ship");
    } else {
        console.log("You Missed")
    }
};

function printArray(array) {
    for (var i = 0; i < array.length; i++) {
        var displayRow = "";
        var item = array[i]
        for (var j = 0; j < item.length; j++) {
            displayRow += (item[j].display())
        }
        console.log(displayRow);
        displayRow = "";
    }
}

makeShips();

printArray(grid);

while (shipCount < 3) {
    var myX = readline.question("enter x coradinate I.E. 0-9: ");
    var myY = readline.question("enter y coradinate I.E. 0-9: ");
    fireTorpedo(myX, myY);
    console.log("Sunk Ships: " + shipCount)
    printArray(grid);
}
console.log("You Destroyed the enemy fleet.")