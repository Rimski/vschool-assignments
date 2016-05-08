var totalCaught = document.getElementById("totalCaught");
var calTotal = document.getElementById("tCost");
//totalGuys.innerHTML(totalG);
// buttongetteers
var buttonCheepCheep = document.getElementById("cheepCheep");
var buttonBobBombs = document.getElementById("bobBombs");
var buttonGoomBas = document.getElementById("goomBas");
var submit = document.getElementById("submit");
//goompas catch caught
var totalGoomBas = [1, ];
var totalBobBombs = [1, ];
var totalCheepCheep = [1, ];
// running catch total return
var goom = document.getElementById("goom");
var bob = document.getElementById("bob");
var cheep = document.getElementById("cheep");
//running price return
var goomBas = document.getElementById("gTotal");
var bobBoms = document.getElementById("bTotal");
var cheepCheep = document.getElementById("cTotal");
//strings for running  catch totals
var strinGooBas = ["1", ];
var strinBombBas = ["1", ];
var strinCheepCheeps = ["1", ];
//var arrayGooBas = strinGooBas.split();
buttonGoomBas.addEventListener("click", function () {
    for (var i = totalGoomBas.length; i <= totalGoomBas.length; i++) {
        totalGoomBas.push(i);
        strinGooBas.push(totalGoomBas[i].toString());
        // return total caught
        goom.innerHTML = strinGooBas[i];
        // return total price
        goomBas.innerHTML = (5 * totalGoomBas[i]).toString();
        break;
    }
});
//bobboms
buttonBobBombs.addEventListener("click", function () {
    for (var j = totalBobBombs.length; j <= totalBobBombs.length; j++) {
        totalBobBombs.push(j);
        strinBombBas.push(totalBobBombs[j].toString());
        bob.innerHTML = strinBombBas[j];
        bobBoms.innerHTML = (7 * totalBobBombs[j]).toString();
        break;
    }
});
//cheepcheeps
buttonCheepCheep.addEventListener("click", function () {
    for (var k = totalCheepCheep.length; k <= totalCheepCheep.length; k++) {
        totalCheepCheep.push(k);
        strinCheepCheeps.push(totalCheepCheep[k].toString());
        cheep.innerHTML = strinCheepCheeps[k];
        cheepCheep.innerHTML = (11 * totalCheepCheep[k]).toString();
        break;
    }
});

// total button
calTotal.addEventListener("click", function () {
    var allbaddies = (totalGoomBas.length + totalBobBombs.length + totalCheepCheep.length - 3);
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