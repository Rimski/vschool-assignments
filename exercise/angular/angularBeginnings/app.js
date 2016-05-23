var app = angular.module("myPractice", []);

app.controller("mainController", ["$scope", function ($scope) {
    $scope.main = {
            text: "text",
    };

}]);