var app = angular.module("MainApp", []);

app.controller("mainController", ["$scope", "pokemonService", function ($scope, pokemonService) {
    // scope function paramter of the pokemon number
    $scope.getPokemon = function (x) {
        // service call 
        pokemonService.getPokemon(x).then(function (pokemon) {
            $scope.pokemon = pokemon;
            //reset pokemon number
            $scope.x = "";
        });
    }
}])