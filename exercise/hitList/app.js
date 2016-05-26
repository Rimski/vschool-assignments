var app = angular.module("GetApi", []);

app.controller("mainController", ["$scope", "HttpService", function ($scope, HttpService) {
 HttpService.get("http://mean.codingcamp.us:6543/hitlist.json").then(function(data){
     $scope.people = data;
 })   
}]);