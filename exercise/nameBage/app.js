var app = angular.module("mainApp", []);

app.controller("MainController", ["$scope", function($scope){
    $scope.people = [];
    $scope.addPeople = function(person){
        $scope.people.push(person);
        $scope.person = {};
    }
}]);