var app = angular.module("mainApp", []);
app.controller("mainController", ["$scope", "$http", function($scope, $http){
    var baseUrl = "https://swapi.co/api/films/4/";
    $http.get(baseUrl)
        .then(function(response){
        $scope.data = response.data;
    $scope.characters = [];
    for (var i = 0; i < $scope.data.characters.length; i++){
        $http.get($scope.data.characters[i])
            .then(function(response){
            $scope.characters.push(response.data);
            console.log($scope.characters[19]);
        })
        
    }
    })
}]);