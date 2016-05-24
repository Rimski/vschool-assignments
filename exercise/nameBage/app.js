var app = angular.module("mainApp", []);

app.controller("MainController", ["$scope", function($scope){
    var people = [];
    $scope.addPeople = function(person){
        people.push(person)
    }
}]);