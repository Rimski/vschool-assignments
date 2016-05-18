var readline = require(readline-sync);

var stats = ["Dead", "Small", "Big", "Powered Up"];

var namePicked = readline.Question("enter 'mario' or 'luigie' ")

var newPlayer = new Player(namePicked);

Function Player(namePicked) {
    this.name = setName;
    this.totalCoins = 0;
    this.status = stats[1];
    this.star = false;
    this.setName = function (namePicked) {
        if (name === "mario") {
            return "Mario";
        } else {
            return "luigi"
        }
    };
    this.gotHit = function () {
        status = stats[--];
    };
    this.gotPowerUp = function () {
        status = stats[++];
    };
    this.gameActive = function () {
        if (status === "Dead") {
            return false;
        } else return true;
    };
    this.addCoin = function () {
        totalCoins++;
    };
    this.print = console.log("Name: " + this.name +
        "\nCoins: " + this.totalCoins + "\nStatus: " + this.statuss + "\nStar: " + this.star)
}


function start(player, gotHit, gotPowerUp, addCoin) {
    var maths = Math.floor(Math.random(() * 3) + 1)
    if (maths === 1) {
        player.gotHit();
    } else
    if (maths === 2) {
        player.gotPowerUp();
    } else {
        player.addCoin();
    }
}

start(newPlayer, gotHit, gotPowerUp, addCoin);