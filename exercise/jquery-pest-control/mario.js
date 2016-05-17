var totalCaught = $("#totalcaught")
var calTotal = $("#tcost");
var totalGoomBas = 0;
var totalBobBombs = 0;
var totalCheepCheep = 0;

$("#cheepCheep").click(function () {
    (totalCheepCheep++);
    callBob();
});
$("#bobBombs").click(function () {
    (totalBobBombs++);
    callCheep();
});
$("#goomBas").click(function () {
    (totalGoomBas++)
    callGoom();
});
$("#submit");

function callBob() {
    $("#bob").text(totalBobBombs)
};

function callCheep() {
    $("#cheep").text(totalCheepCheep)
};

function callGoom() {
    $("#goom").text(totalGoomBas)
};

//running price return
var goomBas = document.getElementById("gTotal");
var bobBoms = document.getElementById("bTotal");
var cheepCheep = document.getElementById("cTotal");

goomBas.innerHTML = (totalGoomBas * 5);

bobBoms.innerHTML = (7 * totalBobBombs);

cheepCheep.innerHTML = (11 * totalCheepCheep);
//calTotal.addEventListener("click", function () {
var allbaddies = (totalGoomBas + totalBobBombs + totalCheepCheep);
var gPriceTotal = goomBas.textContent;

//node value
var bPriceTotal = bobBoms.textContent;
var cPriceTotal = cheepCheep.textContent;

//final numbers
var gValue = parseInt(gPriceTotal);
var bValue = parseInt(bPriceTotal);
var cValue = parseInt(cPriceTotal);
var finalMath = (gValue + bValue + cValue);
totalCaught.innerHTML = allbaddies.toString();
submit.innerHTML = finalMath.toString();
//});