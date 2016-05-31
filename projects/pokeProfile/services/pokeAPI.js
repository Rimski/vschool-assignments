var app = angular.module("MainApp");

app.service("pokemonService", ["$http", function ($http) {
    var baseUrl = "http://pokeapi.co/api/v1/pokemon/";
    var partUrl = "http://pokeapi.co";
    var pokemon = {}
        //takes peramiter of pokemon number
    this.getPokemon = function (x) {
        //get pokemon at pokemon number
        return $http.get(baseUrl + x).then(function (response) {
            return response.data
        }).then(function (data) {
            pokemon.name = data.name;
            pokemon.attack = data.attack;
            pokemon.ability = data.abilities[0].name;
            return (data)
        }).then(function (data) {
            $http.get(partUrl + data.sprites[0].resource_uri).then(function (response) {
                pokemon.img = partUrl + response.data.image;
            })
            return pokemon;
        })
        
        
    }
}]);