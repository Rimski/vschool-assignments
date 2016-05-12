function Enemy(x) {
    this.name = x;
    this.type = type();
    this.hitPoints = hP(this.type);
    this.defense = defense(this.hitPoints);
}

function hP(type) {
    if (type = "ancientDragon") {
        return getRandomInt(80, 100);
    } else if (type = "Prowler") {
        return getRandomInt(50, 79);
    } else if (type = "mightyGrunt") {
        return getRandomInt(20, 49);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function defense(hitPoints) {
    return (hitPoints * 3);
}

function type() {
    var tipe = ((Math.floor(Math.random() * 3) + 1))
    if (tipe === 1) {
        return ("ancientDragon");
    } else if (tipe === 2) {
        return ("Prowler");
    } else if (tipe === 3) {
        return ("mightyGrunt");
    }
}


function makeEnemys() {
    var enemys = [];
    for (var i = 0; i < 100; i++) {
        enemys.push(new Enemy(i));
        continue;
    }
    return enemys;
}


console.log(makeEnemys());
//var jimmy = new Enemy();
//console.log(jimmy.type);
//console.log(jimmy.hitPoints);
//console.log(jimmy.defense);