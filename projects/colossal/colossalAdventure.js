var readline = require("readline-sync");
//get player info
function Player(name) {
    this.name = name;
    this.inventory = [];
    this.hp = 50;
}

function WildEnemy(name) {
    this.name = name;
    this.hp = Math.floor((Math.random() * 35) + 1);
}
var vagrents = ["Walken", "Clem", "Christopher", "Hatcher"];

var Christopher = new WildEnemy(vagrents[2]);

var Clem = new WildEnemy(vagrents[1]);

var Walken = new WildEnemy(vagrents[0]);

var Hatcher = new WildEnemy(vagrents[3]);
// attack
var randomAttack = (Math.floor(Math.random() * 25) + 1);


function running(ememy) {
    console.log("I'll take option C")
    var maths = Math.floor((Math.random() * 2) + 1);
    if (maths === 1) {
        console.log("You got away");
        walking();
    } else {
        console.log(ememy.name + " Stole you're dog... and you died of sadness")
        newPlayer.hp = 0;
    }
}

function print() {
    console.log("Player name: " + newPlayer.name + "\nYour Inventory: " +
        newPlayer.inventory + "\nCurrent health: " + newPlayer.hp)
    if (newPlayer.hp > 0) {
        walking();
    }
}



function enemyPicker() {
    var maths = (Math.floor((Math.random() * 12) + 1));
    if (maths === 1) {
        console.log(" oh no's a vagrent");
        console.log("it's " + "Christopher");
        var fight = readline.question("do you want to run or fight?");
        if (fight === "fight") {
            battle(Christopher, newPlayer, "A watch and a long story. ");
        } else {
            running(Christopher);
        }

    } else if (maths === 2) {
        console.log(" oh no's a vagrent");
        console.log("it's " + "Clem");
        var fight = readline.question("do you want to run or fight?");
        if (fight === "fight") {
            battle(Clem, newPlayer, " The Concept of the toothfairy, ");
        } else {
            running(Clem);
        }

    } else if (maths === 3) {
        console.log(" oh no's a vagrent");
        console.log("it's " + "Walken");
        var fight = readline.question("I need more cow bell!!! press 'b' to \n to give him more cowbell, or 'a' to fight him, or run ");
        if (fight === "a") {
            battle(Walken, newPlayer, "A CowBell, ");
        } else if (fight === "b") {
            console.log("here's my card if you ever want to join a band");
            newPlayer.inventory += ("a card with a big bell, ");
            walking();
        } else {
            running(Walken);
        }
    } else if (maths === 4) {
        console.log(" oh no's a vagrent");
        console.log("it's " + "Hatcher");
        var fight = readline.question("Option 'a' you fight me option 'b' i make you ");
        if (fight === "a") {
            battle(Hatcher, newPlayer, "A Whip, ");
        } else {
            running(Hatcher);
        }
    } else {
        console.log("uneventfull stroll")
        walking();
    }

}

//game start
console.log("Welcome to Camio\na dejavo type game\nall characters are completly fictional and\nand have no reation to Christoper walken");

var givName = readline.question("Little man boy whats your name?  ");
var newPlayer = new Player(givName);
walking();

function battle(enemy, player, object) {
    var fightEnemy = enemy.hp;
    var object = object;
    continueFight();

    function continueFight(object) {
        fightEnemy = (fightEnemy - randomAttack);
        if (fightEnemy > 0) {

            console.log("You hurt " + enemy.name + " his health is at " + fightEnemy);
            newPlayer.hp = (newPlayer.hp -= randomAttack);
            console.log(enemy.name + " strickes back; your health is now " + player.hp);
        } else if (fightEnemy <= 0) {
            console.log("that was close");
            walking();
        } else console.log("why??!")




        while (!fightEnemy < 0 || !player.hp < 0) {
            continueFight();
        }
    }
    if (newPlayer.hp > 0) {
        newPlayer.inventory += [object];
        walking();
    } else {
        (newPlayer.hp = 0)
    }

}




function walking() {

    var walk = readline.question("enter w to walk. enter print to veiw stats and q to quit ");

    if (walk === "w") {
        var enemy = enemyPicker();
        //randomly pick new enemy
    } else if (walk === "print") {
        print();
    } else if (walk === "q") {
        console.log("We'll just call your " + newPlayer.hp + " healt and " + newPlayer.inventory.length + " artifacts tax deductable.");
        newPlayer.hp = 0;
    } else {
        console.log("enter w");
    }
}
while (newPlayer.hp > 0) {
    walking();
}

print();
console.log("You were youfunized.");