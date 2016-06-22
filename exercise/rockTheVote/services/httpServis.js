var app = angular.module("MainApp");

app.service("httpService", ["$http", function ($http) {
    var baseUrl = "http://localhost:5000/";
    this.addpost = function (post) {
        return $http.post(baseUrl, post).then(function (responce) {
            return responce.data;
        })
    };
    this.deletepost = function (item) {
        return $http.delete(baseUrl + item._id).then(function (responce) {
            return responce.data;
        })
    };
    this.editpost = function (post) {
        return $http.put(baseUrl + post._id, post).then(function (responce) {
            return responce.data;
        })
    };
    this.getList = function (post) {
        return $http.get(baseUrl).then(function (responce) {
            return responce.data;
        });
    };
}]);