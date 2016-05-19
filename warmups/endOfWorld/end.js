//var hour = document.getElementById("hour")
//var mins = document.getElementById("mins")
var secs = document.getElementById("secs")

var count = 20;

function countDown(timeLeft) {
    if (count >= 0) {

        secs.innerHTML = count;
        count--
    } else {
        clearInterval(handler);
        console.log("end of the world");
    } 

}

var handler = setInterval(countDown, 500);

//var backwardsCount = function () {
//    for (var i = 0; i < 20; i++) {
//        count.push(i);
//    }
//}
//
//backwardsCount();
//
//var backCount = count.reverse();
//
//function secsTime() {
//    for (var i = 0; i < backCount.length; i++){
//
//}
//}
//
//function countDown() {
//    secsTime();
//    setTimeout(secs.innerHTML(backCount[i]), 1000);
//}
//
//