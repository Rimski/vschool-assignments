var app = angular.module("MainApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/add", {
            templateUrl: "veiws/add.html",
        }).otherwise({
            templateUrl: "veiws/home.html"
        })

})

app.controller("mainController", ["$scope", "ponyHttp", "$location", function ($scope, ponyHttp, $location) {
    $scope.tryAgain = false;
    $scope.ponies = [];
    ponyHttp.getPony().then(function (ponys) {
        $scope.ponies = ponys;
    })
    $scope.addPony = function (pony) {
        if (pony.name.length > 3 && pony.imgUrl.length > 1 && pony.username.length > 0 ) {
            ponyHttp.addPony(pony);
            $scope.pony = {};
            $scope.tryAgain = false;
            $location.path("/list")
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