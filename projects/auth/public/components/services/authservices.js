var app = angular.module("MainApp");

app.service("authService", ["$http", function($http) {
    this.signup = function(user) {
        return $http.post("http://localhost:8000/signup", user).then(function(responce) {
            return responce.data;
        })
    };
    this.login = function(user) {
        return $http.post("http://localhost:8000/login", user).then(function(responce) {
            return responce.data;
        })
    };
    this.logOut = function()  {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
    }
}])