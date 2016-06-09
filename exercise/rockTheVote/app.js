var app = angular.module("MainApp", []);


app.controller("mainController", ["$scope", "HTTPService", function($scope, HTTPService) {
    $scope.agenda = [];
}])