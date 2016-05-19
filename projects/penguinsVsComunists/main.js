// object creater
function Party(name) {
    this.name = name;
    this.population = 1000000;
};

var penguins = new Party("penguins");

var comunists = new Party("comunistes");

function onHit(party) {
    if (party === comunists) {
        penguins.population -= (Math.floor(Math.random() * 1000000) + 1);
        console.log("nuke hits " + penguins.name);
        console.log("Penguin population " + penguins.population);

        if (penguins.population > 0) {
            sendNuke(penguins,   onHit, onMiss);
            console.log(penguins.name + " sending nuke");
        } else {
            console.log(penguins.name + " send one last Nuke")
        }
    } else if (party === penguins) {
        comunists.population -= (Math.floor(Math.random() * 1000000) + 1);
        console.log("nuke hits " + comunists.name);
        console.log("Comie population " + comunists.population);

        if (comunists.population > 0) {
            console.log(comunists.name + " sending nuke");
            sendNuke(comunists, onHit, onMiss);
        }
    }
}

function onMiss(party) {
    if (party === penguins) {
        console.log(penguins.name + "'s nuke missed");
        console.log(comunists.name + " sending nuke");
        sendNuke(comunists, onHit, onMiss);
    } else if (party === comunists) {
        console.log(comunists.name + "'s nuke missed");
        console.log(penguins.name + " sending nuke");
        sendNuke(penguins, onHit, onMiss);
    }


}

function sendNuke(party, onHit, onMiss) {
    //    setTimeout(function () {


    if (penguins.population > 0 && comunists.population > 0) {

        var maths = (Math.floor(Math.random() * 2) + 1);
        if (maths === 2) {
            onHit(party);

        } else if (maths === 1) {
            onMiss(party);

        }

    }
    //    }, 1000)


}


function start() {
    var maths = (Math.floor(Math.random() * 2) + 1);
    if (maths === 1) {
        console.log(penguins.name + " wage ware on the comunists")
        sendNuke(penguins, onHit, onMiss);
    } else {
        console.log(comunists.name + " wage war on the penguins")
        sendNuke(comunists, onHit, onMiss)
    }
}
start();