var app = angular.module("MainApp");

app.service("elephantService", ["$http", function($http) {
    this.adoptElephant = function(elephant){
        return $http.post("http://localhost:8000/api/elephant", elephant).then(function(responce) {
            return responce.data;
        })
    };
    this.feedElephant = function(elephant){
        return $http.post("http://localhost:8000/api/elephant/:id", elephant).then(function(responce) {
            return responce.data;
        })
    };
    this.getElephants = function() {
        return $http.get("http://localhost:8000/api/elephant").then(function(responce) {
            return responce.data;
        })
    };
}])