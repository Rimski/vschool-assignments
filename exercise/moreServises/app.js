var app = angular.module("ShowApp", []);

app.controller("mainController", ["$scope", "showList", function ($scope, showList) {
    $scope.list = showList.display();
    console.log($scope.list)
    $scope.show = {};
    $scope.submit = function (show) {
        showList.addShow(show);
        $scope.show = {};
    }
}])