var app = angular.module("MainApp", ["ngRoute"]);

app.config(function($routeProvider) {
        $routeProvider
        .when("/add", {
        templateUrl:"veiws/add.html",
    }).otherwise({
            templateUrl:"veiws/home.html"
        })
    
})

app.controller("mainController", ["$scope", "ponyHttp", function($scope, ponyHttp) {
   $scope.ponies = [];
    ponyHttp.getPony().then(function(ponys) {
            $scope.ponies = ponys;
        
        console.log($scope.ponies.length);
    })
    $scope.addPony = function(pony) {
        ponyHttp.addPony(pony);
    }
}])