var app = angular.module("MainApp");

app.service("HTTPService", ["$http", function ($http) {
    var baseUrl = "http://localhost:8000/";
    this.addpost = function (post) {
        return $http.post(baseUrl, post).then(function (responce) {
            return responce.data;
        })
    };
    this.deletepost = function (post) {
        return $http.delete(baseUrl + "/" + post.id).then(function (responce) {
            return responce.data;
        })
    };
    this.editpost = function (post) {
        $http.put(baseUrl + "/" + post.id, post);
    };
    this.getList = function (post) {
        return $http.get(baseUrl).then(function (responce) {
            return responce.data;
        });
    };
}])