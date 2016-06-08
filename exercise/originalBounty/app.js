var app = angular.module("MainApp", []);

app.controller("mainController", ["$scope", "HTTPService", function($scope, HTTPService) {
    var baseUrl = "http://localhost:8000/bounty";
    $scope.bounties = [];
    $scope.add = false;
    HTTPService.getList().then(function(data) {
        $scope.bounties = data;
    });
    $scope.postPerson = function (person){
       HTTPService.addOne(person).then(function(data) {
           $scope.bounties.push(data);
           $scope.add = false;
       })
    }
    $scope.deleteOne = function(person){
       HTTPService.deleteOne(person).then(function(data) {
       console.log(data);
            for (var i = 0; i < $scope.bounties.length; i++){
                if ($scope.bounties[i].id === person.id) {
                    $scope.bounties.splice(i, 1);
                }
            }    
       })
            
        
    }
    $scope.putPerson = function(person){
       HTTPService.editOne(person)
        person.edit = false;
    }
    
}])