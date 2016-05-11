var readline = require("readline-sync");

function Player(name) {
    this.name = name;
    this.inventory = [];
    this.hp = 50;
}

function WildEnemy(name) {
    this.name = name;
    this.hp = Math.floor((Math.random() * 35) + 1);
}

function randomAttack() {
    Math.floor((Math.random() * 25) + 1);
}

function running() {
   var maths = Math.floor((Math.random() * 2) +1);
    if (maths === 1){
        console.log("You got away")
    }else{
        Player.hp = 0;
    }
}
function print(){
   console.log ("Player name: " + Player.name + "\n" + "Your Inventory: " + 
                Player.inventory + "\n" + "Current health: " + Player.hp)
}

function enemyPicker(){


var maths = (Math.floor((Math.random() * 12) + 1)); 
if (maths === 1) {
   return new WildEnemy(Christopher);
    } else if (maths === 2){
        return new WildEnemy(Terrance);
    } else if (maths === 3){
        return new WildEnemy(Walken);
    } else{
        return 
    }

}
console.log("hellow");

var Player = readline.question("whats your name?  ");


var walk = readline.question("enter w to walk. "\n"enter print to veiw stats. ");

if (walk === "w") {
    enemyPicker();
    if (enemyPicker === true) {
    console.log(watch out )
    var battle = readline.question("Enter r for run away and "\n" and f for stay and fight. ")
    }
    
        //randomly pick new enemy
} else if (walk === "print") {
    console.log(print());
} else console.log("enter w")
while (Player.hp > 0) {
    walking();
} else console.log(You died to death.)
