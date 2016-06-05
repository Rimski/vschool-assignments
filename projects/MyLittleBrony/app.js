var app = angular.module("MainApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/add", {
            templateUrl: "veiws/add.html",
        }).otherwise({
            templateUrl: "veiws/home.html"
        })

})

app.controller("mainController", ["$scope", "ponyHttp", function ($scope, ponyHttp) {
    $scope.tryAgain = false;
    $scope.ponies = [];
    ponyHttp.getPony().then(function (ponys) {
        $scope.ponies = ponys;
        console.log($scope.ponies)
    })
    $scope.addPony = function (pony) {
        if (pony.name.length > 3 && pony.imgUrl.length > 1 && pony.username.length > 0 ) {
            ponyHttp.addPony(pony);
            $scope.pony = {};
        } else {
            $scope.tryAgain = true
        }

    }
    $scope.deleteOne = function (pony) {
        if (confirm("This is perminate are you sure?") === true) {
            ponyHttp.removePony(pony)
        } else {}
    }
}])