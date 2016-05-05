// Written by Kent, Clark

var Enemies = ["Lex", "Batman", "Darkseid", "Braniac", "General Zod", "Doomsday"];

function Who_Wins(is_there_kryptonite, enemyName) {
    if (!is_there_kryptonite) {
        return ("Superman beats " + enemyName + " of course");
    } else
        return ("It depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.");
}

for (var i = 0; i < Enemies.length; i++) {
var is_there_kryptonite =  
    (i % 2 === 0) 
    console.log(Who_Wins(is_there_kryptonite, Enemies[i]));
}

function HowAttractedIsLoisLaneToMe() {
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random() * 10) + 1);
}

var clarkKent = true;
var superman = false;

while (clarkKent) {
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent = false;
        superman = true;
        console.log("Now I'm Superman!");
    }
}
console.log(HowAttractedIsLoisLaneToMe());