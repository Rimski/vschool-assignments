var app = angular.module("TodoApp.Auth");

app.controller("LoginController", ["$scope", "$location", "UserService", function($scope, $location, UserService) {
    $scope.login = function (user) {
        UserService.login(user).then(function(response) {
            $location.path("/todos");
        }, function(response) {
            alert("there was a problem:" + response.data.message);
        })
    }
}]);