var app = angular.module("MainApp");

app.service("HTTPService", ["$http", function ($http) {
    var baseUrl = "http://localhost:8000/bounty";
    this.addOne = function (person) {
        return $http.post(baseUrl, person).then(function (responce) {
            return responce.data;
        })
    };
    this.deleteOne = function (person) {
        return $http.delete(baseUrl + "/" + person.id).then(function (responce) {
            return responce.data;
        })
    };
    this.editOne = function (person) {
        $http.put(baseUrl + "/" + person.id, person);
    };
    this.getList = function (person) {
        return $http.get(baseUrl).then(function (responce) {
            return responce.data;
        });
    };
}])