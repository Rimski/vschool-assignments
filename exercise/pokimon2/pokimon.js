var myString = $.ajax("http://pokeapi.co/api/v1/pokedex/1/", {
    success: function (data) {
        for (var i; i < data.pokemon.lenght; i++) {
            myArray = data.pokemon[i].name.split;
        }
    }
});
var myArray = [];




$(".pokiemon").click(function () {
    console.log("you clicked?");
    $(".new").append(
        "<h2>" + myArray++ + "<h2>")
});