var app = angular.module("GetApi");
app.service("HttpService", ["$http", function ($http) {
    this.get = function (url) {
        return $http.get(url).then(function (responce) {
            return responce.data;
        })
    }
}]);