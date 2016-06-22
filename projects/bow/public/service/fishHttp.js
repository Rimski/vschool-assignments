var app = angular.module("MainApp");

app.service("httpFish", ["$http", function($http) {
    var baseUrl = "http://localhost:8000/fish/";
    this.goFish = function() {
       return $http.get(baseUrl).then(function(responce) {
            return responce.data;
        })
    };
    this.addFish = function(item) {
        return $http.post(baseUrl, item).then(function(responce) {
            return responce.data;
        })
    };
    this.editFish = function(fish) {
        return $http.put(baseUrl + fish._id, fish).then(function(responce) {
            return responce.data;
        })
    };
    this.eatFish = function(id) {
        return $http.delete(baseUrl + id).then(function(responce) {
            return responce.data;
        })
    }
}])