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
//        .otherwise({
//       templateUrl: "./componets/veiws/landingpage.html"
//   })
});

app.controller("MainController", ["$scope", "authService", "$location", function($scope, authService, $location) {
    $scope.test = "lolololololo";
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
//            $location.path("./components/veiws/home.html");
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
//        $location.path("./components/veiws.landingpage.html");
    }
}]);