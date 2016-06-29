var app = angular.module("MainApp", ["ngRoute"]);

app.config(function($routeProvider) {
   $routeProvider  
        .when("/login", {
       templateUrl: "./components/veiws/login.html"
   })
        .when("/signup", {
       templateUrl: "./components/veiws/signup.html"
   })
        .when("/adopt", {
       templateUrl: "./components/veiws/adopt.html"
   })
        .when("/elephants", {
       templateUrl: "./components/veiws/elephants.html"
   })
        .when("/profile", {
       templateUrl: "./components/veiws/profile.html"
   })
        .otherwise({
       templateUrl: "./components/veiws/landingpage.html"
   })
});

app.controller("MainController", ["$scope", "authService", "$location", "elephantService", function($scope, authService, $location, elephantService) {
    (function () {
        var token = localStorage.getItem("token");
        if (token) {
            $scope.loged = true;
        } else {
            $scope.loged = false;
        }
    })();
    $scope.logIn = function(user) {
        authService.login(user).then(function(responce) {
             localStorage.setItem("token", responce.token);
            $scope.loged = true;
            localStorage.setItem("id", responce.user.id);
            $location.path("/adopt");
            console.log(responce);
        })
    };
    $scope.addUser = function(user) {
        authService.signup(user).then(function(responce) {
         
            console.log(responce);
        })
    };
    $scope.logOut = function() {
        authService.logOut();
        $scope.loged = false;
        $location.path("./components/veiws.landingpage.html");
    }
    $scope.adopt = function(elephant) {
        elephant.userId = localStorage.getItem("id");
        elephantService.adoptElephant(elephant).then(function(responce) {
            console.log(responce);
        })
    };
    $scope.veiw = function() {
        var id = localStorage.getItem("id");
        elephantService.getElephants(id).then(function(responce) {
            console.log(responce.data);
            $scope.zoo = responce.data;
        })
    }
}]);