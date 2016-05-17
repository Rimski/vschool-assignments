// input grabbers

form = document.getElementById("form");
submit = document.getElementById("submit");

// destination grabbers
highScore = document.getElementById("highScore");


var myCheck = document.getElementById("trash");

trashTalk = ["you suck", "im the coolest", "i bet you sit alone at lunch"];

function randomSlang() {
    var i = Math.floor(Math.floor(Math.random() * 3) + 0);
    return trashTalk[i]
}

myCheck.addEventListener("change", true, false);

function checkBox() {
    if (myCheck.checked === true) {
        return (randomSlang());
    } else return "Im no fun";
};


// submit button
submit.addEventListener("click", function () {
    nameOne = document.getElementById("name");
    game = document.getElementById("game");
    today = document.getElementById("date");
    score = document.getElementById("score");

    var row = highScore.insertRow(highScore.length);
    var myCell1 = row.insertCell();
    var myCell2 = row.insertCell();
    var myCell3 = row.insertCell();
    var myCell4 = row.insertCell();
    var myCell5 = row.insertCell();
    var thisName = document.createTextNode(nameOne.value);
    var thisGame = document.createTextNode(game.value);
    var thisDate = document.createTextNode(today.value);
    var thisScore = document.createTextNode(score.value);
    //    var thisTrash = document.createTextNode(checkBox());
    myCell1.appendChild(thisName);
    myCell2.appendChild(thisGame);
    myCell3.appendChild(thisDate);
    myCell4.appendChild(thisScore);
    myCell5.innerHTML = checkBox();
});




//trash talk