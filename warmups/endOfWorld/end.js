//var hour = document.getElementById("hour")
//var mins = document.getElementById("mins")
var secs = document.getElementById("secs")

var count = [];

var backCount = count.reverse();

var backwardsCount = function () {
    for (var i = 0; i < 20; i++) {
        count.push(i);
    }
}
backwardsCount();

function secsTime() {
    for (var i = 0; i < backCount.length; i++){

}
}

function countDown() {
    secsTime();
    setTimeout(secs.innerHTML(backCount[i]), 1000);
}


