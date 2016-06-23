var app = angular.module("TodoApp.Auth");

app.controller("SignupuController", ["$scope", "$location", "UserService", function($scope, $location, UserService) {
    $scope.passwordMessage = "";
    
    $scope.signup = function (user) {
        if (user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Passwords do not match."
        } else {
            UserService.signup(user).then(function(responce) {
                $location.path("/login");
            }, function(response) {
                alert("there was a problem: " + response.data.message)
            }
            )
        }
    }
}]);