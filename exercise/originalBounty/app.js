var app = angular.module("MainApp", []);

app.controller("mainController", ["$scope", "$http", function($scope, $http) {
    var baseUrl = "http://localhost:8000/bounty";
    $scope.bounties = [];
    $http.get(baseUrl).then(function(responce) {
        $scope.bounties = responce.data;
    });
    $scope.postPerson = function (person){
        $http.post(baseUrl, person).then(function(responce) {
            $scope.bounties.push(responce.data);
        })
    }
    $scope.deleteOne = function(person){
        $http.delete(baseUrl + "/" + person.id).then(function(responce) {
            console.log(responce.data);
            for (var i = 0; i < $scope.bounties.length; i++){
                if ($scope.bounties[i].id === person.id) {
                    $scope.bounties.splice(i, 1);
                }
            }
        })
    }
    $scope.putPerson = function(person){
        $http.put(baseUrl + "/" + person.id, person)
        person.edit = false;
    }
    
}])