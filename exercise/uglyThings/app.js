var app = angular.module("uglyApp", []);

app.controller("uglyController", ["$scope", function($scope){
    $scope.uglyArray = [];
    $scope.object = {};
    $scope.submit = function(object) {
        $scope.uglyArray.push(object);
        $scope.object = {};
    }
    $scope.comments = [];
    $scope.addComment = function(comment) {
        $scope.comments.push(comment);
        $scope.comment = {};
    }
}]);