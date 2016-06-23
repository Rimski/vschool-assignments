var app = angular.module("MainApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/gear", {
            templateUrl: "./veiws/gear.html"
        })
        .when("/records", {
            templateUrl: "./veiws/record.html"
        })
        .otherwise({
            templateUrl: "./veiws/home.html"
        })
});

app.controller("mainController", ["$scope", "httpFish", function ($scope, httpFish) {
    $scope.fishes = [];
    $scope.add = false;
    httpFish.goFish().then(function (data) {
        $scope.fishes = data;
    });
    $scope.test = "lolz";
    $scope.addFish = function (item) {
        $scope.add = !$scope.add;
        $scope.item = {};
        httpFish.addFish(item).then(function (data) {
            $scope.fishes.push(data);
        })
    };
    $scope.deleteFish = function (fish) {
        httpFish.eatFish(fish._id).then(function (data) {
            for (var i = 0; i < $scope.fishes.length; i++) {
                if (fish._id === $scope.fishes[i]._id) {
                    $scope.fishes.splice(i, 1);
                }
            }
            console.log(data);
        })
    }
    $scope.editFish = function (fish) {
        fish.edit = !fish.edit;
        httpFish.editFish(fish).then(function (fish) {
            for (var i = 0; i < $scope.fishes.length; i++) {
                if (fish._id === $scope.fishes[i]) {
                    $scope.fishes[i] = fish;
                }
            }
        })
    }
    $scope.fishUp = function (fish) {
        fish.popularity = fish.popularity + 1;
        httpFish.editFish(fish).then(function (fish) {
            for (var i = 0; i < $scope.fishes.length; i++) {
                if (fish._id === $scope.fishes[i]) {
                    $scope.fishes[i] = fish;
                }
            }
        })

    }
    $scope.fishDown = function (fish) {
        fish.popularity = fish.popularity - 1;
        httpFish.editFish(fish).then(function (fish) {
            for (var i = 0; i < $scope.fishes.length; i++) {
                if (fish._id === $scope.fishes[i]) {
                    $scope.fishes[i] = fish;
                }
            }
        })
    }
}])