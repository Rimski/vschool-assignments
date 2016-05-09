var totalCaught = document.getElementById("totalCaught");
var calTotal = document.getElementById("tCost");

// buttongetters
var buttonCheepCheep = document.getElementById("cheepCheep");
var buttonBobBombs = document.getElementById("bobBombs");
var buttonGoomBas = document.getElementById("goomBas");
var submit = document.getElementById("submit");

//goompas catch caught
var totalGoomBas = 0;
var totalBobBombs = 0;
var totalCheepCheep = 0;

// running catch total return
var goom = document.getElementById("goom");
var bob = document.getElementById("bob");
var cheep = document.getElementById("cheep");

//running price return
var goomBas = document.getElementById("gTotal");
var bobBoms = document.getElementById("bTotal");
var cheepCheep = document.getElementById("cTotal");

buttonGoomBas.addEventListener("click", function () {
    totalGoomBas++;
    goom.innerHTML = totalGoomBas;
    goomBas.innerHTML = (totalGoomBas * 5);
});

buttonBobBombs.addEventListener("click", function () {
    totalBobBombs++;
    bob.innerHTML = totalBobBombs;
    bobBoms.innerHTML = (7 * totalBobBombs);
});

buttonCheepCheep.addEventListener("click", function () {
    totalCheepCheep++
    cheep.innerHTML = totalCheepCheep;
    cheepCheep.innerHTML = (11 * totalCheepCheep);
});

calTotal.addEventListener("click", function () {
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
});