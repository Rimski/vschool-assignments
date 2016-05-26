var app = angular.module("mainApp");
app.service("HttpService", ["$http", function ($http) {
    this.get = function (url) {
        return $http.get(url).then(function (responce) {
            return responce.data
        });
    };
    this.post = function (url, item) {
        return $http.post(url, item).then(
        function(response){
            return response.data;
        });
    };
    this.put = function (url, item) {
        return $http.put(url, item).then(
        )
    }
}])