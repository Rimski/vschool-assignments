var app = angular.module("mainApp", []);

app.controller("controllerOne", ["$scope", function($scope){
    $scope.awnserOne = "pie";
    $scope.addOne = function(numbers) {
    $scope.awnserOne = (numbers.one + numbers.two);
    }
}]);

app.controller("controllertwo", ["$scope", function($scope){
     $scope.awnserTwo = "pie";
    $scope.addTwo = function(numbers) {
    $scope.awnserTwo = (numbers.one * numbers.two);
    }
}]);

